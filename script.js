document.addEventListener('DOMContentLoaded', () => {
    let squad = [
        { name: 'MS Dhoni', designation: 'Wicketkeeper-Batter' },
        { name: 'Devon Conway', designation: 'Wicketkeeper-Batter', Foreigner: true },
        { name: 'Ruturaj Gaikwad', designation: 'Batter' },
        { name: 'Rahul Tripathi', designation: 'Batter' },
        { name: 'Shaik Rasheed', designation: 'Batter' },
        { name: 'Vansh Bedi', designation: 'Wicketkeeper-Batter' },
        { name: 'Andre Siddarth', designation: 'Batter' },
        { name: 'Rachin Ravindra', designation: 'All-rounder', Spinner: true, Foreigner: true },
        { name: 'Ravichandran Ashwin', designation: 'All-rounder', Spinner: true },
        { name: 'Vijay Shankar', designation: 'All-rounder' },
        { name: 'Sam Curran', designation: 'All-rounder', Fast: true, Foreigner: true },
        { name: 'Anshul Kamboj', designation: 'All-rounder' },
        { name: 'Deepak Hooda', designation: 'All-rounder' },
        { name: 'Jamie Overton', designation: 'All-rounder', Fast: true, Foreigner: true },
        { name: 'Kamlesh Nagarkoti', designation: 'All-rounder', Fast: true },
        { name: 'Ramakrishna Ghosh', designation: 'All-rounder', Fast: true },
        { name: 'Ravindra Jadeja', designation: 'All-rounder', Spinner: true },
        { name: 'Shivam Dube', designation: 'All-rounder' },
        { name: 'Khaleel Ahmed', designation: 'Bowler', Fast: true },
        { name: 'Noor Ahmad', designation: 'Bowler', Spinner: true, Foreigner: true },
        { name: 'Mukesh Choudhary', designation: 'Bowler', Fast: true },
        { name: 'Gurjapneet Singh', designation: 'Bowler', Fast: true },
        { name: 'Nathan Ellis', designation: 'Bowler', Fast: true, Foreigner: true },
        { name: 'Shreyas Gopal', designation: 'Bowler', Spinner: true },
        { name: 'Matheesha Pathirana', designation: 'Bowler', Fast: true, Foreigner: true }
    ];
  
    const squadContainer = document.getElementById('squad');
    const positionsContainer = document.getElementById('positions');
  
    let selectedPlayers = new Map(); // Tracks which players are in which positions
    let draggedElement = null;
    let foreignPlayersCount = 0;
  
    // Add this at the top with other global variables
    let currentTeam = ''; // Start with no team selected
  
    // Add this object for team colors
    const teamColors = {
        'CSK': {
            primary: '#FECB00',    // Yellow
            secondary: '#1C1C72'   // Blue
        },
        'MI': {
            primary: '#004BA0',    // Blue
            secondary: '#EED76E'   // Gold
        },
        'RCB': {
            primary: '#DA291C',    // Red
            secondary: '#000000',   // Black
            accent: '#B4975A'      // Gold
        },
        'KKR': {
            primary: '#2F0057',    // Purple
            secondary: '#85714D'    // Gold
        },
        'DC': {
            primary: '#17449B',    // Blue
            secondary: '#E82128'    // Red
        },
        'PBKS': {
            primary: '#D71920',    // Red
            secondary: '#A5ACAF'    // Silver
        },
        'RR': {
            primary: '#254AA5',    // Blue
            secondary: '#B59A50'    // Gold
        },
        'SRH': {
            primary: '#FF6600',    // Orange
            secondary: '#000000'    // Black
        },
        'LSG': {
            primary: '#1F4E79',    // Blue
            secondary: '#F28C28'    // Orange
        },
        'GT': {
            primary: '#0A1D4E',    // Dark Blue
            secondary: '#E6C200'    // Gold
        }
    };
  
    // Function to create a player card
    function createPlayerCard(player) {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.draggable = true;
        card.dataset.name = player.name;
        card.dataset.foreigner = player.Foreigner ? 'true' : 'false';
  
        // Format player name for image filename
        const playerImageName = player.name.toLowerCase().replace(/ /g, '_');
        const playerImagePath = `Teams/${currentTeam}/${playerImageName}.png`;
  
        // Console log for debugging
        console.log('Loading image from:', playerImagePath);
  
        card.innerHTML = `
            <div class="player-img">
                <img src="${playerImagePath}" 
                     alt="${player.name}" 
                     onerror="console.log('Error loading:', this.src); this.src='img/default-player.png'" 
                     draggable="false">
            </div>
            <div class="player-info">
                <div class="player-name">
                    <h2>${player.name}</h2>
                </div>
                <span class="player-role">${player.designation}</span>
            </div>
        `;
  
        // Add role icon
        let roleIcon = '';
        if (player.designation === 'All-rounder') {
            roleIcon = '<img src="img/teams-all-rounder-icon.svg" class="role-icon" alt="All-rounder">';
        } else if (player.designation === 'Bowler') {
            roleIcon = '<img src="img/teams-bowler-icon.svg" class="role-icon" alt="Bowler">';
        } else if (player.designation === 'Wicketkeeper-Batter') {
            roleIcon = '<img src="img/teams-wicket-keeper-icon.svg" class="role-icon" alt="Wicket Keeper">';
        } else if (player.designation === 'Batter') {
            roleIcon = '<img src="img/teams-batsman-icon.svg" class="role-icon" alt="Batsman">';
        }
        card.insertAdjacentHTML('afterbegin', roleIcon);
  
        // Add status icons
        if (player.Foreigner) {
            card.insertAdjacentHTML('afterbegin', '<img src="img/teams-foreign-player-icon.svg" class="status-icon foreign-icon" alt="Foreign Player">');
        }
        if (player.name === 'MS Dhoni') {
            card.insertAdjacentHTML('afterbegin', '<img src="img/teams-captain-icon.svg" class="status-icon captain-icon" alt="Captain">');
        }
  
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
  
        return card;
    }
  
    // Function to create foreign counter
    function createForeignCounter() {
        const counter = document.createElement('div');
        counter.className = 'foreign-counter';
        counter.innerHTML = `
            <img src="img/teams-foreign-player-icon.svg" alt="Foreign Players">
            <span>0/4</span>
        `;
        return counter;
    }
  
    // First, add this function to create the counter section
    function createPlayerTypeCounter() {
        const counterContainer = document.createElement('div');
        counterContainer.className = 'player-type-counter';
        counterContainer.innerHTML = `
            <div class="counter-item">
                <span class="counter-label">Batters:</span>
                <span class="counter-value" id="batter-count">0</span>
            </div>
            <div class="counter-item">
                <span class="counter-label">All-Rounders:</span>
                <span class="counter-value" id="allrounder-count">0</span>
            </div>
            <div class="counter-item">
                <span class="counter-label">Bowlers:</span>
                <span class="counter-value" id="bowler-count">0</span>
            </div>
        `;
        return counterContainer;
    }
  
    // Add this function to update the counters
    function updatePlayerTypeCounts() {
        let batterCount = 0;
        let allrounderCount = 0;
        let bowlerCount = 0;
  
        // Count players in positions
        const positions = document.querySelectorAll('.position');
        positions.forEach(position => {
            const playerName = position.dataset.player;
            if (playerName) {
                const player = squad.find(p => p.name === playerName);
                if (player) {
                    if (player.designation === 'Batter' || player.designation === 'Wicketkeeper-Batter') {
                        batterCount++;
                    } else if (player.designation === 'All-rounder') {
                        allrounderCount++;
                    } else if (player.designation === 'Bowler') {
                        bowlerCount++;
                    }
                }
            }
        });
  
        // Update counter displays
        document.getElementById('batter-count').textContent = batterCount;
        document.getElementById('allrounder-count').textContent = allrounderCount;
        document.getElementById('bowler-count').textContent = bowlerCount;
    }
  
    // Function to organize squad by player types
    function renderOrganizedSquad() {
        // Clear existing content
        squadContainer.innerHTML = '';
  
        // If no team is selected, don't render anything
        if (!currentTeam) {
            const mainHeader = document.createElement('h3');
            mainHeader.className = 'main-squad-header section-header';
            mainHeader.textContent = 'Select a team to view squad';
            squadContainer.appendChild(mainHeader);
            return;
        }
  
        // Rest of your existing renderOrganizedSquad code...
        const mainHeader = document.createElement('h3');
        mainHeader.className = 'main-squad-header section-header';
        mainHeader.textContent = `${getTeamFullName(currentTeam)} Squad - 2025`;
        squadContainer.appendChild(mainHeader);
  
        // Create sections for each player type
        const sections = {
            'Batters': ['Batter', 'Wicketkeeper-Batter'],
            'All-Rounders': ['All-rounder'],
            'Bowlers': ['Bowler']
        };
  
        // Create and append sections
        for (const [sectionName, roles] of Object.entries(sections)) {
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'squad-section';
  
            // Add section header
            const header = document.createElement('h4');
            header.className = 'subsection-header';
            header.textContent = sectionName;
            sectionDiv.appendChild(header);
  
            // Add players container
            const playersDiv = document.createElement('div');
            playersDiv.className = 'players-container';
  
            // Filter and add players for this section
            const sectionPlayers = squad.filter(player =>
                roles.includes(player.designation)
            );
  
            sectionPlayers.forEach(player => {
                const card = createPlayerCard(player);
                playersDiv.appendChild(card);
            });
  
            sectionDiv.appendChild(playersDiv);
            squadContainer.appendChild(sectionDiv);
        }
    }
  
    // Function to create position boxes
    function createPositionBoxes() {
        // Add foreign counter to playing-team section
        const playingTeamSection = document.getElementById('playing-team');
        const foreignCounter = createForeignCounter();
        playingTeamSection.appendChild(foreignCounter);
  
        // Create positions container if it doesn't exist
        const positionsContainer = document.getElementById('positions') || document.createElement('div');
        positionsContainer.id = 'positions';
        playingTeamSection.appendChild(positionsContainer);
  
        // Create position boxes
        for (let i = 1; i <= 12; i++) {
            const positionBox = document.createElement('div');
            positionBox.className = 'position';
            positionBox.dataset.position = i;
  
            const positionLabel = i === 12 ? 'Impact Sub' : `Position ${i}`;
            positionBox.innerHTML = `<span class="position-label">${positionLabel}</span>`;
  
            positionBox.addEventListener('dragover', handleDragOver);
            positionBox.addEventListener('dragleave', handleDragLeave);
            positionBox.addEventListener('drop', handleDrop);
  
            positionsContainer.appendChild(positionBox);
        }
  
        // Add player type counter
        const playerTypeCounter = createPlayerTypeCounter();
        playingTeamSection.appendChild(playerTypeCounter);
  
        // Create buttons container
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'lineup-buttons';
  
        // Create clear button
        const clearButton = document.createElement('button');
        clearButton.className = 'lineup-btn clear-btn';
        clearButton.innerHTML = `
            <i class="fas fa-trash-alt"></i>
            Clear
        `;
        clearButton.addEventListener('click', clearEntireLineup);
  
        // Create preview button
        const previewButton = document.createElement('button');
        previewButton.className = 'lineup-btn preview-btn';
        previewButton.innerHTML = `
            <i class="fas fa-eye"></i>
            Preview
        `;
        previewButton.addEventListener('click', showPreview);
  
        // Create download button
        const downloadButton = document.createElement('button');
        downloadButton.className = 'lineup-btn download-btn';
        downloadButton.innerHTML = `
            <i class="fas fa-download"></i>
            Download
        `;
        downloadButton.addEventListener('click', downloadLineup);
  
        // Add buttons to container
        buttonsContainer.appendChild(clearButton);
        buttonsContainer.appendChild(previewButton);
        buttonsContainer.appendChild(downloadButton);
  
        // Add container to playing-team section
        playingTeamSection.appendChild(buttonsContainer);
  
        // Create preview modal
        createPreviewModal();
    }
  
    // Drag and drop functionality
    function handleDragStart(e) {
        draggedElement = e.target.closest('.player-card');
        if (!draggedElement) return;
  
        e.dataTransfer.setData('text/plain', draggedElement.dataset.name);
        draggedElement.classList.add('dragging');
    }
  
    function handleDragEnd(e) {
        if (draggedElement) {
            draggedElement.classList.remove('dragging');
        }
        document.querySelectorAll('.position').forEach(pos => {
            pos.classList.remove('dragover');
        });
        draggedElement = null;
    }
  
    function handleDragOver(e) {
        e.preventDefault();
        const position = e.target.closest('.position');
        if (position) {
            position.classList.add('dragover');
        }
    }
  
    function handleDragLeave(e) {
        const position = e.target.closest('.position');
        if (position) {
            position.classList.remove('dragover');
        }
    }
  
    function handleDrop(e) {
        e.preventDefault();
        const targetPosition = e.target.closest('.position');
        if (!targetPosition || !draggedElement) return;
  
        targetPosition.classList.remove('dragover');
        const draggedPlayerName = draggedElement.dataset.name;
        const sourcePosition = draggedElement.closest('.position');
  
        // Get player details
        const draggedPlayer = squad.find(p => p.name === draggedPlayerName);
        if (!draggedPlayer) return;
  
        // Case 1: Moving from squad to empty position
        if (!sourcePosition && !targetPosition.dataset.player) {
            // Check foreign player limit
            if (draggedPlayer.Foreigner) {
                const currentForeignCount = countForeignPlayers();
                if (currentForeignCount >= 4) {
                    showPopupMessage();
                    return;
                }
            }
  
            // Remove from previous position if exists anywhere
            const existingPosition = findPlayerPosition(draggedPlayerName);
            if (existingPosition) {
                clearPosition(existingPosition);
            }
  
            placePlayerInPosition(draggedPlayerName, targetPosition);
            updateForeignCounter();
        }
        // Case 2: Moving from squad to occupied position
        else if (!sourcePosition && targetPosition.dataset.player) {
            const targetPlayerName = targetPosition.dataset.player;
            const targetPlayer = squad.find(p => p.name === targetPlayerName);
  
            // Check foreign player limit
            if (draggedPlayer.Foreigner && !targetPlayer.Foreigner) {
                const currentForeignCount = countForeignPlayers();
                if (currentForeignCount >= 4) {
                    showPopupMessage();
                    return;
                }
            }
  
            // Remove from previous position if exists anywhere
            const existingPosition = findPlayerPosition(draggedPlayerName);
            if (existingPosition) {
                clearPosition(existingPosition);
            }
  
            clearPosition(targetPosition);
            placePlayerInPosition(draggedPlayerName, targetPosition);
            updateForeignCounter();
        }
        // Case 3: Moving between positions
        else if (sourcePosition && sourcePosition !== targetPosition) {
            const targetPlayerName = targetPosition.dataset.player;
  
            // If target position is empty
            if (!targetPlayerName) {
                movePlayerToNewPosition(sourcePosition, targetPosition);
                updateForeignCounter();
            } else {
                // Swap players
                const targetPlayer = squad.find(p => p.name === targetPlayerName);
  
                // Check foreign player limit for swap
                if (draggedPlayer.Foreigner !== targetPlayer.Foreigner) {
                    const currentForeignCount = countForeignPlayers();
                    const newForeignCount = currentForeignCount +
                        (draggedPlayer.Foreigner ? 1 : -1) +
                        (targetPlayer.Foreigner ? -1 : 1);
  
                    if (newForeignCount > 4) {
                        showPopupMessage();
                        return;
                    }
                }
  
                swapPlayers(sourcePosition, targetPosition);
                updateForeignCounter();
            }
        }
  
        // Add this at the end of the function
        updatePlayerTypeCounts();
        updateButtonStates();
    }
  
    // Helper function to find if a player is already in a position
    function findPlayerPosition(playerName) {
        return document.querySelector(`.position[data-player="${playerName}"]`);
    }
  
    // Helper function to move a player to a new empty position
    function movePlayerToNewPosition(sourcePosition, targetPosition) {
        const playerCard = sourcePosition.querySelector('.player-card');
        const playerName = sourcePosition.dataset.player;
  
        // Update position indicator
        const positionIndicator = playerCard.querySelector('.position-indicator');
        if (positionIndicator) {
            positionIndicator.textContent = targetPosition.dataset.position === '12'
                ? 'Impact Sub'
                : `Position ${targetPosition.dataset.position}`;
        }
  
        // Move the card
        targetPosition.innerHTML = '';
        targetPosition.appendChild(playerCard);
        targetPosition.classList.add('occupied');
        targetPosition.dataset.player = playerName;
  
        // Clear source position
        sourcePosition.innerHTML = `<span class="position-label">
            ${sourcePosition.dataset.position === '12' ? 'Impact Sub' : `Position ${sourcePosition.dataset.position}`}
        </span>`;
        sourcePosition.classList.remove('occupied');
        sourcePosition.dataset.player = '';
  
        // Update selected players map
        selectedPlayers.set(playerName, targetPosition.dataset.position);
        updateSquadCardPosition(targetPosition.dataset.position, playerName);
    }
  
    function swapPlayers(sourcePosition, targetPosition) {
        const sourcePlayerName = sourcePosition.dataset.player;
        const targetPlayerName = targetPosition.dataset.player;
  
        const sourceCard = sourcePosition.querySelector('.player-card');
        const targetCard = targetPosition.querySelector('.player-card');
  
        // Update position indicators
        updatePositionIndicator(sourceCard, targetPosition.dataset.position);
        updatePositionIndicator(targetCard, sourcePosition.dataset.position);
  
        // Swap the cards
        sourcePosition.innerHTML = '';
        targetPosition.innerHTML = '';
        sourcePosition.appendChild(targetCard);
        targetPosition.appendChild(sourceCard);
  
        // Update data attributes and selected players map
        sourcePosition.dataset.player = targetPlayerName;
        targetPosition.dataset.player = sourcePlayerName;
        selectedPlayers.set(sourcePlayerName, targetPosition.dataset.position);
        selectedPlayers.set(targetPlayerName, sourcePosition.dataset.position);
  
        // Update squad indicators
        updateSquadCardPosition(targetPosition.dataset.position, sourcePlayerName);
        updateSquadCardPosition(sourcePosition.dataset.position, targetPlayerName);
    }
  
    function placePlayerInPosition(playerName, position) {
        const player = squad.find(p => p.name === playerName);
        if (!player) return;
  
        // Create player card for position
        const card = document.createElement('div');
        card.className = 'player-card';
        card.draggable = true;
        card.dataset.name = playerName;
  
        const playerImageName = player.name.toLowerCase().replace(/ /g, '_');
        const playerImagePath = `Teams/${currentTeam}/${playerImageName}.png`;
  
        card.innerHTML = `
            <div class="player-img">
                <img src="${playerImagePath}" 
                     alt="${player.name}" 
                     onerror="this.src='img/default-player.png'" 
                     draggable="false">
            </div>
            <div class="player-info">
                <div class="position-indicator">
                    ${position.dataset.position === '12' ? 'Impact Sub' : `Position ${position.dataset.position}`}
                </div>
                <div class="player-name">
                    <h2>${player.name}</h2>
                </div>
                <span class="player-role">${player.designation}</span>
            </div>
        `;
  
        // Add role and status icons
        addPlayerIcons(card, player);
  
        // Add remove button with updated functionality
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-player';
        removeBtn.innerHTML = '×';
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentPosition = e.target.closest('.position');
            const playerToRemove = currentPosition.dataset.player;
            const playerData = squad.find(p => p.name === playerToRemove);
  
            // Update foreign count if needed
            if (playerData && playerData.Foreigner) {
                const currentForeignCount = countForeignPlayers();
                if (currentForeignCount > 0) {
                    foreignPlayersCount = currentForeignCount - 1;
                }
            }
  
            // Clear the position
            clearPosition(currentPosition);
  
            // Remove position indicator from squad
            updateSquadCardPosition('', playerToRemove);
  
            // Remove the 'assigned' class from the original squad card
            const squadCard = document.querySelector(`.player-card[data-name="${playerToRemove}"]:not(.position *)`);
            if (squadCard) {
                squadCard.classList.remove('assigned');
            }
  
            // Remove from selected players map
            selectedPlayers.delete(playerToRemove);
        });
        card.appendChild(removeBtn);
  
        // Add drag listeners
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
  
        // Update position
        position.innerHTML = '';
        position.appendChild(card);
        position.classList.add('occupied');
        position.dataset.player = playerName;
  
        // Update tracking
        selectedPlayers.set(playerName, position.dataset.position);
  
        // Add 'assigned' class to squad card
        const squadCard = document.querySelector(`.player-card[data-name="${playerName}"]:not(.position *)`);
        if (squadCard) {
            squadCard.classList.add('assigned');
        }
  
        updateSquadCardPosition(position.dataset.position, playerName);
    }
  
    function clearPosition(position) {
        const playerName = position.dataset.player;
        if (!playerName) return;
  
        // Find the player in the squad
        const player = squad.find(p => p.name === playerName);
  
        // Update foreign count if needed
        if (player?.Foreigner) {
            const currentForeignCount = countForeignPlayers();
            if (currentForeignCount > 0) {
                foreignPlayersCount = currentForeignCount - 1;
            }
        }
  
        // Reset position element
        position.innerHTML = `<span class="position-label">
            ${position.dataset.position === '12' ? 'Impact Sub' : `Position ${position.dataset.position}`}
        </span>`;
        position.classList.remove('occupied');
        position.dataset.player = '';
  
        // Remove 'assigned' class from squad card
        const squadCard = document.querySelector(`.player-card[data-name="${playerName}"]:not(.position *)`);
        if (squadCard) {
            squadCard.classList.remove('assigned');
            // Remove position indicator from squad card
            const indicator = squadCard.querySelector('.squad-position-indicator');
            if (indicator) {
                indicator.remove();
            }
        }
  
        // Clear from selected players map
        selectedPlayers.delete(playerName);
  
        updateForeignCounter();
        updatePlayerTypeCounts();
        updateButtonStates();
    }
  
    function addPlayerIcons(card, player) {
        if (player.designation === 'All-rounder') {
            card.insertAdjacentHTML('afterbegin', '<img src="img/teams-all-rounder-icon.svg" class="role-icon" alt="All-rounder">');
        } else if (player.designation === 'Bowler') {
            card.insertAdjacentHTML('afterbegin', '<img src="img/teams-bowler-icon.svg" class="role-icon" alt="Bowler">');
        } else if (player.designation === 'Wicketkeeper-Batter') {
            card.insertAdjacentHTML('afterbegin', '<img src="img/teams-wicket-keeper-icon.svg" class="role-icon" alt="Wicket Keeper">');
        } else if (player.designation === 'Batter') {
            card.insertAdjacentHTML('afterbegin', '<img src="img/teams-batsman-icon.svg" class="role-icon" alt="Batsman">');
        }
  
        if (player.Foreigner) {
            card.insertAdjacentHTML('afterbegin', '<img src="img/teams-foreign-player-icon.svg" class="status-icon foreign-icon" alt="Foreign Player">');
        }
        if (player.name === 'MS Dhoni') {
            card.insertAdjacentHTML('afterbegin', '<img src="img/teams-captain-icon.svg" class="status-icon captain-icon" alt="Captain">');
        }
    }
  
    // Add resizer functionality
    const mainContainer = document.getElementById('main-container');
  
    // Create and add resizer element
    const resizer = document.createElement('div');
    resizer.id = 'resizer';
    mainContainer.appendChild(resizer);
  
    let isResizing = false;
    let startX;
    let startWidth;
  
    resizer.addEventListener('mousedown', initResize);
  
    function initResize(e) {
        isResizing = true;
        startX = e.clientX;
        startWidth = document.getElementById('squad-view').offsetWidth;
  
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
  
        // Add resizing class to prevent transition during resize
        document.body.classList.add('resizing');
    }
  
    function resize(e) {
        if (!isResizing) return;
  
        const containerWidth = mainContainer.offsetWidth;
        const newWidth = startWidth + (e.clientX - startX);
  
        // Ensure minimum width fits at least 2 cards (2 * 160px) plus padding and gap
        const minWidth = 360; // 2 cards (320px) + padding (40px)
        const maxWidth = containerWidth - 360; // Leave space for at least 2 cards in playing team
  
        if (newWidth >= minWidth && newWidth <= maxWidth) {
            const squadView = document.getElementById('squad-view');
            squadView.style.flex = `0 0 ${newWidth}px`;
            resizer.style.left = `${newWidth}px`;
        }
    }
  
    function stopResize() {
        isResizing = false;
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
  
        // Remove resizing class to re-enable transitions
        document.body.classList.remove('resizing');
    }
  
    // Add this CSS class to prevent transitions during resize
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        body.resizing .player-card,
        body.resizing .position,
        body.resizing #squad-view,
        body.resizing #playing-team {
            transition: none !important;
        }
    `;
    document.head.appendChild(styleSheet);
  
    // Add new function to update squad card position indicator
    function updateSquadCardPosition(position, playerName) {
        const squadCard = document.querySelector(`.player-card[data-name="${playerName}"]:not(.position *)`);
        if (squadCard) {
            // Remove existing position indicator if any
            const existingIndicator = squadCard.querySelector('.squad-position-indicator');
            if (existingIndicator) {
                existingIndicator.remove();
            }
  
            // Add new position indicator if position is provided
            if (position) {
                const playerInfo = squadCard.querySelector('.player-info');
                if (playerInfo) {
                    const indicator = document.createElement('div');
                    indicator.className = 'squad-position-indicator';
                    indicator.textContent = position === '12' ? 'Impact Sub' : `Position ${position}`;
                    playerInfo.insertBefore(indicator, playerInfo.firstChild);
                }
            }
  
            // Update assigned class
            if (position) {
                squadCard.classList.add('assigned');
            } else {
                squadCard.classList.remove('assigned');
            }
        }
    }
  
    // Add helper function to update position indicator
    function updatePositionIndicator(card, position) {
        if (!card) return;
        const indicator = card.querySelector('.position-indicator');
        if (indicator) {
            indicator.textContent = position === '12' ? 'Impact Sub' : `Position ${position}`;
        }
    }
  
    // Add this new function to count current foreign players
    function countForeignPlayers() {
        let count = 0;
        const positions = document.querySelectorAll('.position');
        positions.forEach(position => {
            const playerName = position.dataset.player;
            if (playerName) {
                const player = squad.find(p => p.name === playerName);
                if (player && player.Foreigner) {
                    count++;
                }
            }
        });
        return count;
    }
  
    // Update the showPopupMessage function
    function showPopupMessage() {
        const popup = document.getElementById('popup-message');
        if (!popup) {
            const newPopup = document.createElement('div');
            newPopup.id = 'popup-message';
            newPopup.innerHTML = `
                <div class="popup-text">Maximum of 4 foreign players allowed in the team</div>
                <button class="popup-close">×</button>
            `;
            document.body.appendChild(newPopup);
  
            const closeBtn = newPopup.querySelector('.popup-close');
            closeBtn.addEventListener('click', () => {
                newPopup.classList.remove('popup-show');
            });
        }
  
        popup.classList.add('popup-show');
  
        // Auto-hide after 3 seconds
        setTimeout(() => {
            popup.classList.remove('popup-show');
        }, 3000);
    }
  
    function hidePopupMessage() {
        const popup = document.getElementById('popup-message');
        popup.classList.remove('popup-show');
    }
  
    // Add event listener for close button
    document.addEventListener('DOMContentLoaded', () => {
        // ... existing code ...
  
        // Add popup close button listener
        const popupClose = document.querySelector('.popup-close');
        if (popupClose) {
            popupClose.addEventListener('click', hidePopupMessage);
        }
  
        // Set initial minimum widths
        const squadView = document.getElementById('squad-view');
        const playingTeam = document.getElementById('playing-team');
        squadView.style.minWidth = '360px';
        playingTeam.style.minWidth = '360px';
  
        // Team logo selection functionality
        initializeTeamLogos();
    });
  
    // Function to get full team names
    function getTeamFullName(shortName) {
        const teamNames = {
            'CSK': 'Chennai Super Kings',
            'DC': 'Delhi Capitals',
            'GT': 'Gujarat Titans',
            'KKR': 'Kolkata Knight Riders',
            'LSG': 'Lucknow Super Giants',
            'MI': 'Mumbai Indians',
            'PBKS': 'Punjab Kings',
            'RCB': 'Royal Challengers Bangalore',
            'RR': 'Rajasthan Royals',
            'SRH': 'Sunrisers Hyderabad'
        };
        return teamNames[shortName] || 'Select Team';
    }
  
    // Update the initializeTeamLogos function
    function initializeTeamLogos() {
        const teamLogos = document.querySelectorAll('.ap-logoteam-wrp');
        const teamNameHeader = document.querySelector('#team-name h2');
        const root = document.documentElement;
  
        // Set initial team name
        teamNameHeader.textContent = 'Select Team';
  
        teamLogos.forEach(logo => {
            // Remove any existing 'selected' class
            logo.classList.remove('selected');
            
            // Remove any existing right-tick divs
            const existingTick = logo.querySelector('.right-tick');
            if (existingTick) {
                existingTick.remove();
            }
  
            // Add right-tick div to each logo
            const rightTick = document.createElement('div');
            rightTick.className = 'right-tick';
            rightTick.innerHTML = '<img src="img/check.png" alt="Selected" width="12" height="12">';
            logo.appendChild(rightTick);
  
            logo.addEventListener('click', () => {
                // Remove selected class from all logos
                teamLogos.forEach(l => l.classList.remove('selected'));
  
                // Add selected class to clicked logo
                logo.classList.add('selected');
  
                // Update team name and currentTeam
                const teamCode = logo.dataset.team;
                currentTeam = teamCode;
                const teamName = getTeamFullName(teamCode);
                teamNameHeader.textContent = teamName;
  
                // Update team colors
                const colors = teamColors[teamCode];
                if (colors) {
                    root.style.setProperty('--team-primary', colors.primary);
                    root.style.setProperty('--team-secondary', colors.secondary);
                    if (colors.accent) {
                        root.style.setProperty('--team-accent', colors.accent);
                    }
                    updatePlayerCardStyles(colors);
                }
  
                // Clear playing team positions
                clearAllPositions();
  
                // Update squad based on selected team
                updateSquadForTeam(teamCode);
            });
        });
    }
  
    // Add this new function to update player card styles
    function updatePlayerCardStyles(colors) {
        const style = document.createElement('style');
        style.textContent = `
            /* Team Logo Section Styling */
            .vn-teamOverviewWrap {
                background: linear-gradient(135deg, ${colors.secondary}15, ${colors.primary}15) !important;
                border-bottom: 2px solid ${colors.primary}30 !important;
            }
  
            .ap-logoteam-wrp {
                background-color: rgba(255, 255, 255, 0.9) !important;
                transition: all 0.3s ease !important;
            }
  
            .ap-logoteam-wrp:hover {
                background-color: ${colors.primary}20 !important;
                transform: scale(1.1);
            }
  
            .ap-logoteam-wrp.selected {
                background: linear-gradient(135deg, ${colors.primary}30, ${colors.secondary}30) !important;
                transform: scale(1.1);
                box-shadow: 0 4px 12px ${colors.secondary}40 !important;
            }
  
            /* Main container and background styles */
            #main-container {
                background-color: transparent !important;
            }
  
            /* Squad and Playing Team containers */
            #squad-view, #playing-team {
                background-color: rgba(255, 255, 255, 0.9) !important;
                border: 1px solid ${colors.primary}30 !important;
                box-shadow: 0 4px 20px ${colors.secondary}20 !important;
            }
  
            /* Player cards and sections */
            .player-card {
                border-color: ${colors.primary} !important;
                background: linear-gradient(to bottom, ${colors.secondary}05, ${colors.primary}05) !important;
                box-shadow: 0 4px 15px ${colors.secondary}15 !important;
            }
  
            .player-card:hover {
                box-shadow: 0 6px 20px ${colors.primary}25 !important;
                transform: translateY(-2px);
            }
  
            .section-header {
                background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%) !important;
                border-left: 4px solid ${colors.primary} !important;
            }
  
            /* Position indicators and labels */
            .position-indicator {
                background-color: ${colors.primary} !important;
                color: ${colors.secondary === '#000000' ? '#FFFFFF' : colors.secondary} !important;
            }
  
            .squad-position-indicator {
                background-color: ${colors.secondary} !important;
                color: #FFFFFF !important;
            }
  
            /* Position boxes */
            .position {
                border-color: ${colors.secondary}40 !important;
                background-color: rgba(255, 255, 255, 0.9) !important;
            }
  
            .position.dragover {
                border-color: ${colors.primary} !important;
                background-color: ${colors.primary}15 !important;
            }
  
            .position:hover:not(.occupied) {
                border-color: ${colors.primary}80 !important;
                background-color: ${colors.secondary}05 !important;
            }
  
            .position-label {
                color: ${colors.secondary} !important;
            }
  
            /* Buttons */
            .lineup-btn {
                border: none !important;
                transition: all 0.3s ease !important;
            }
  
            .clear-btn {
                background-color: ${colors.secondary} !important;
            }
  
            .clear-btn:hover {
                background-color: ${colors.primary} !important;
            }
  
            .preview-btn {
                background-color: ${colors.primary} !important;
            }
  
            .preview-btn:hover {
                background-color: ${colors.secondary} !important;
            }
  
            .download-btn {
                background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary}) !important;
            }
  
            .download-btn:hover {
                background: linear-gradient(135deg, ${colors.secondary}, ${colors.primary}) !important;
            }
  
            /* Preview modal */
            .preview-modal .modal-content {
                background-color: rgba(255, 255, 255, 0.98) !important;
                border: 2px solid ${colors.primary} !important;
            }
  
            .preview-modal .modal-content h2 {
                color: ${colors.primary} !important;
                text-shadow: 1px 1px 2px ${colors.secondary}20 !important;
            }
  
            /* Team name */
            #team-name h2 {
                color: ${colors.primary} !important;
                text-shadow: 1px 1px 2px ${colors.secondary}40 !important;
            }
  
            /* Remove button */
            .remove-player {
                background-color: ${colors.secondary}CC !important;
                color: white !important;
            }
  
            .remove-player:hover {
                background-color: ${colors.primary} !important;
                transform: scale(1.1);
            }
  
            /* Selected player card */
            .player-card.assigned {
                border-color: ${colors.secondary} !important;
                box-shadow: 0 4px 15px ${colors.primary}25 !important;
            }
        `;
  
        // Remove any existing dynamic styles
        const existingStyle = document.getElementById('dynamic-team-styles');
        if (existingStyle) {
            existingStyle.remove();
        }
  
        // Add ID to new style element and append to document
        style.id = 'dynamic-team-styles';
        document.head.appendChild(style);
    }
  
    // Function to clear all positions in playing team
    function clearAllPositions() {
        const positions = document.querySelectorAll('.position');
        positions.forEach(position => {
            if (position.dataset.player) {
                clearPosition(position);
            }
        });
        // Reset foreign players count
        foreignPlayersCount = 0;
        updateForeignCounter();
    }
  
    // Function to update squad based on selected team
    async function updateSquadForTeam(teamCode) {
        try {
            const response = await fetch(`https://ipl-api-i1el.onrender.com/api/players/team/${teamCode}`);
            if (!response.ok) {
                throw new Error('Failed to fetch team squad');
            }
            const teamSquads = await response.json();
    
            squad.length = 0; // Clear current squad 
            squad.push(...(teamSquads[teamCode] || []));
    
            renderOrganizedSquad();
        } catch (error) {
            console.error('Error updating squad:', error);
            // Optional: Show user-friendly error message
            alert('Unable to load team squad. Please try again later.');
        }
    }
  
    // Initialize
    initializeTeamLogos();
    renderOrganizedSquad();
    createPositionBoxes();
  
    // Update the updateForeignCounter function
    function updateForeignCounter() {
        const count = countForeignPlayers();
        const counter = document.querySelector('.foreign-counter');
        const counterSpan = counter?.querySelector('span');
  
        if (counterSpan) {
            counterSpan.textContent = `${count}/4`;
            // Toggle limit-reached class instead of directly styling
            if (count >= 4) {
                counter.classList.add('limit-reached');
            } else {
                counter.classList.remove('limit-reached');
            }
        }
    }
  
    // Add the clearEntireLineup function
    function clearEntireLineup() {
        // Find all occupied positions
        const occupiedPositions = document.querySelectorAll('.position.occupied');
  
        // Clear each position
        occupiedPositions.forEach(position => {
            clearPosition(position);
        });
  
        // Reset foreign players count
        foreignPlayersCount = 0;
        updateForeignCounter();
  
        // Remove 'assigned' class from all squad cards
        const squadCards = document.querySelectorAll('.player-card');
        squadCards.forEach(card => {
            card.classList.remove('assigned');
            // Remove position indicator if it exists
            const indicator = card.querySelector('.squad-position-indicator');
            if (indicator) {
                indicator.remove();
            }
        });
  
        // Clear selected players map
        selectedPlayers.clear();
  
        updatePlayerTypeCounts();
        updateButtonStates();
    }
  
    // Add function to create preview modal
    function createPreviewModal() {
        const modal = document.createElement('div');
        modal.className = 'preview-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close">×</button>
                <h2>Team Preview</h2>
                <div class="preview-players"></div>
            </div>
        `;
  
        document.body.appendChild(modal);
  
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }
  
    // Add function to check if lineup is complete
    function isLineupComplete() {
        const positions = document.querySelectorAll('.position');
        return Array.from(positions).every(position => position.classList.contains('occupied'));
    }
  
    // Add function to update button states
    function updateButtonStates() {
        const buttons = document.querySelectorAll('.lineup-btn');
        const isComplete = isLineupComplete();
  
        buttons.forEach(button => {
            if (button.classList.contains('clear-btn')) {
                // Clear button is always active
                button.classList.add('active');
            } else {
                // Preview and Download buttons are only active when lineup is complete
                if (isComplete) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            }
        });
    }
  
    // Update the showPreview function
    function showPreview() {
        if (!isLineupComplete()) return;
  
        const modal = document.querySelector('.preview-modal');
        const previewContainer = modal.querySelector('.preview-players');
        previewContainer.innerHTML = '';
  
        const positions = document.querySelectorAll('.position');
        positions.forEach(position => {
            const playerCard = position.querySelector('.player-card');
            if (playerCard) {
                // Create a new card instead of cloning to have more control
                const previewCard = document.createElement('div');
                previewCard.className = 'player-card preview-card';
  
                // Get player data
                const playerName = playerCard.querySelector('.player-name h2').textContent;
                const playerRole = playerCard.querySelector('.player-role').textContent;
                const playerImg = playerCard.querySelector('.player-img img').src;
                const positionLabel = playerCard.querySelector('.position-indicator').textContent;
  
                // Recreate card without remove button
                previewCard.innerHTML = `
                    <div class="player-img">
                        <img src="${playerImg}" alt="${playerName}">
                    </div>
                    <div class="player-info">
                        <div class="position-indicator">${positionLabel}</div>
                        <div class="player-name">
                            <h2>${playerName}</h2>
                        </div>
                        <span class="player-role">${playerRole}</span>
                    </div>
                `;
  
                // Copy role and status icons if they exist
                const roleIcon = playerCard.querySelector('.role-icon');
                const foreignIcon = playerCard.querySelector('.foreign-icon');
                const captainIcon = playerCard.querySelector('.captain-icon');
  
                if (roleIcon) {
                    previewCard.insertAdjacentHTML('afterbegin', roleIcon.outerHTML);
                }
                if (foreignIcon) {
                    previewCard.insertAdjacentHTML('afterbegin', foreignIcon.outerHTML);
                }
                if (captainIcon) {
                    previewCard.insertAdjacentHTML('afterbegin', captainIcon.outerHTML);
                }
  
                previewContainer.appendChild(previewCard);
            }
        });
  
        modal.classList.add('active');
    }
  
    // Update the download function
    function downloadLineup() {
        if (!isLineupComplete()) return;
  
        // Only target the positions container
        const positionsContainer = document.getElementById('positions');
  
        // Temporarily hide the buttons container
        const buttonsContainer = document.querySelector('.lineup-buttons');
        const originalDisplay = buttonsContainer.style.display;
        buttonsContainer.style.display = 'none';
  
        html2canvas(positionsContainer, {
            scale: 2, // Higher quality
            backgroundColor: '#ffffff',
            useCORS: true, // Enable cross-origin image loading
            logging: false // Disable logging
        }).then(canvas => {
            // Create and trigger download
            const link = document.createElement('a');
            link.download = `${currentTeam}_lineup.png`;
            link.href = canvas.toDataURL('image/png', 1.0);
            link.click();
  
            // Restore the buttons display
            buttonsContainer.style.display = originalDisplay;
        });
    }

  });


