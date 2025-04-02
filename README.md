# IPL Team Maker

A web-based application that allows users to create and manage their dream IPL (Indian Premier League) team. This interactive tool enables cricket enthusiasts to select players from different teams and create their optimal playing XI while adhering to IPL rules and regulations.[Website Link](https://prasanth0003.github.io/IPL_Squad_Maker.github.io/)

## Features

- **Team Selection**: Choose from all 10 IPL teams (CSK, DC, GT, KKR, LSG, MI, PBKS, RR, RCB, SRH)
- **Player Management**: 
  - View complete squad of selected team
  - Drag and drop players to create playing XI
  - Automatic validation of team composition
- **Rules Compliance**:
  - Maximum 4 foreign players limit
  - Real-time validation of team composition
  - Visual feedback for rule violations
- **Interactive UI**:
  - Drag-and-drop interface
  - Responsive design
  - Visual team logos and player cards
  - Split view for squad and playing XI

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- HTML2Canvas (for team screenshot functionality)

## Project Structure

```
IPL-TEAM-MAKER-FrontEnd/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── header_logos/       # Team logos
├── Teams/             # Team data and player information
└── img/               # Additional images and assets
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Navigate to the project directory:
   ```bash
   cd IPL-TEAM-MAKER-FrontEnd
   ```

3. Open `index.html` in your web browser to start using the application.

## Usage

1. Select your desired IPL team from the team logos at the top
2. View the complete squad in the left panel
3. Drag and drop players to create your playing XI in the right panel
4. The application will automatically validate your team composition
5. A popup will appear if you exceed the maximum limit of 4 foreign players

## Rules and Constraints

- Maximum 4 foreign players allowed in the playing XI
- Team composition must be valid according to IPL regulations
- Real-time validation ensures rule compliance

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- IPL for team logos and player data
- All images and assets are used for educational purposes only

