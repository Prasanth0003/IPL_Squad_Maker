package com.example.demo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class PlayerService {
	// List to store player objects
	private List<Player> players = new ArrayList<>();
	
	// Constructor to initialize players
	 public PlayerService() {
	        initializePlayers();
	 }
	 
	 // Method to initialize the list with some players
	private void initializePlayers() {
		//CSK
		players.add(new Player("MS Dhoni", "Wicketkeeper-Batter", false, false, false,"CSK"));
		players.add(new Player("Devon Conway", "Wicketkeeper-Batter", true, false, false,"CSK"));
		players.add(new Player("Ruturaj Gaikwad", "Batter", false, false, false,"CSK"));
		players.add(new Player("Rahul Tripathi", "Batter", false, false, false,"CSK"));
		players.add(new Player("Shaik Rasheed", "Batter", false, false, false,"CSK"));
		players.add(new Player("Vansh Bedi", "Wicketkeeper-Batter", false, false, false,"CSK"));
		players.add(new Player("Andre Siddarth", "Batter", false, false, false,"CSK"));
		players.add(new Player("Rachin Ravindra", "All-rounder", true, true, false,"CSK"));
		players.add(new Player("Ravichandran Ashwin", "All-rounder", false, true, false,"CSK"));
		players.add(new Player("Vijay Shankar", "All-rounder", false, false, false,"CSK"));
		players.add(new Player("Sam Curran", "All-rounder", true, false, true,"CSK"));
		players.add(new Player("Anshul Kamboj", "All-rounder", false, false, false,"CSK"));
		players.add(new Player("Deepak Hooda", "All-rounder", false, false, false,"CSK"));
		players.add(new Player("Jamie Overton", "All-rounder", true, false, true,"CSK"));
		players.add(new Player("Kamlesh Nagarkoti", "All-rounder", false, false, true,"CSK"));
		players.add(new Player("Ramakrishna Ghosh", "All-rounder", false, false, true,"CSK"));
		players.add(new Player("Ravindra Jadeja", "All-rounder", false, true, false,"CSK"));
		players.add(new Player("Shivam Dube", "All-rounder", false, false, false,"CSK"));
		players.add(new Player("Khaleel Ahmed", "Bowler", false, false, true,"CSK"));
		players.add(new Player("Noor Ahmad", "Bowler", true, true, false,"CSK"));
		players.add(new Player("Mukesh Choudhary", "Bowler", false, false, true,"CSK"));
		players.add(new Player("Gurjapneet Singh", "Bowler", false, false, true,"CSK"));
		players.add(new Player("Nathan Ellis", "Bowler", true, false, true,"CSK"));
		players.add(new Player("Shreyas Gopal", "Bowler", false, true, false,"CSK"));
		players.add(new Player("Matheesha Pathirana", "Bowler", true, false, true,"CSK"));
		
		//SRH
		players.add(new Player("Ishan Kishan", "Wicketkeeper-Batter", false, false, false, "SRH"));
		players.add(new Player("Heinrich Klaasen", "Wicketkeeper-Batter", true, false, false, "SRH"));
		players.add(new Player("Travis Head", "Batter", true, false, false, "SRH"));
		players.add(new Player("Abhinav Manohar", "Batter", false, false, false, "SRH"));
		players.add(new Player("Atharva Taide", "Batter", false, false, false, "SRH"));
		players.add(new Player("Sachin Baby", "Batter", false, false, false, "SRH"));
		players.add(new Player("Aniket Verma", "Batter", false, false, false, "SRH"));
		players.add(new Player("Abhishek Sharma", "All-rounder", false, true, false, "SRH"));
		players.add(new Player("Nitish Kumar Reddy", "All-rounder", false, false, false, "SRH"));
		players.add(new Player("Kamindu Mendis", "All-rounder", true, true, false, "SRH"));
		players.add(new Player("Pat Cummins", "All-rounder", true, false, true, "SRH"));
		players.add(new Player("Mohammed Shami", "Bowler", false, false, true, "SRH"));
		players.add(new Player("Harshal Patel", "Bowler", false, false, true, "SRH"));
		players.add(new Player("Jaydev Unadkat", "Bowler", false, false, true, "SRH"));
		players.add(new Player("Simarjeet Singh", "Bowler", false, false, true, "SRH"));
		players.add(new Player("Eshan Malinga", "Bowler", true, false, true, "SRH"));
		players.add(new Player("Adam Zampa", "Bowler", true, true, false, "SRH"));
		players.add(new Player("Rahul Chahar", "Bowler", false, true, false, "SRH"));
		players.add(new Player("Zeeshan Ansari", "Bowler", false, true, false, "SRH"));
		
		//DC
		players.add(new Player("KL Rahul", "Wicketkeeper-Batter", false, false, false, "DC"));
		players.add(new Player("Tristan Stubbs", "Wicketkeeper-Batter", true, false, false, "DC"));
		players.add(new Player("Abishek Porel", "Wicketkeeper-Batter", false, false, false, "DC"));
		players.add(new Player("Donovan Ferreira", "Wicketkeeper-Batter", true, false, false, "DC"));
		players.add(new Player("Jake Fraser McGurk", "Batter", true, false, false, "DC"));
		players.add(new Player("Harry Brook", "Batter", true, false, false, "DC"));
		players.add(new Player("Ashutosh Sharma", "Batter", false, false, false, "DC"));
		players.add(new Player("Faf du Plessis", "Batter", true, false, false, "DC"));
		players.add(new Player("Sameer Rizvi", "Batter", false, false, false, "DC"));
		players.add(new Player("Karun Nair", "Batter", false, false, false, "DC"));
		players.add(new Player("Axar Patel", "All-rounder", false, true, false, "DC"));
		players.add(new Player("Vipraj Nigam", "All-rounder", false, false, false, "DC"));
		players.add(new Player("Darshan Nalkande", "All-rounder", false, false, true, "DC"));
		players.add(new Player("Madhav Tiwari", "All-rounder", false, false, true, "DC"));
		players.add(new Player("Manvanth Kumar", "All-rounder", false, false, true, "DC"));
		players.add(new Player("Tripurana Vijay", "All-rounder", false, true, false, "DC"));
		players.add(new Player("Ajay Mandal", "All-rounder", false, true, false, "DC"));
		players.add(new Player("Mitchell Starc", "Bowler", true, false, true, "DC"));
		players.add(new Player("T Natarajan", "Bowler", false, false, true, "DC"));
		players.add(new Player("Mukesh Kumar", "Bowler", false, false, true, "DC"));
		players.add(new Player("Mohit Sharma", "Bowler", false, false, true, "DC"));
		players.add(new Player("Dushmantha Chameera", "Bowler", true, false, true, "DC"));
		players.add(new Player("Kuldeep Yadav", "Bowler", false, true, false, "DC"));
        
		//GT
		players.add(new Player("Sai Sudharsan", "Batter", false, false, false, "GT"));
		players.add(new Player("Shahrukh Khan", "Batter", false, false, false, "GT"));
		players.add(new Player("Sherfane Rutherford", "Batter", true, false, false, "GT"));
		players.add(new Player("Shubman Gill", "Batter", false, false, false, "GT"));
		players.add(new Player("Arshad Khan", "All-rounder", false, false, true, "GT"));
		players.add(new Player("Glenn Phillips", "All-rounder", true, false, false, "GT"));
		players.add(new Player("Karim Janat", "All-rounder", true, false, false, "GT"));
		players.add(new Player("Mahipal Lomror", "All-rounder", false, false, false, "GT"));
		players.add(new Player("Nishant Sindhu", "All-rounder", false, true, false, "GT"));
		players.add(new Player("Rahul Tewatia", "All-rounder", false, true, false, "GT"));
		players.add(new Player("Sai Kishore", "All-rounder", false, true, false, "GT"));
		players.add(new Player("Washington Sundar", "All-rounder", false, true, false, "GT"));
		players.add(new Player("Anuj Rawat", "Wicketkeeper-Batter", false, false, false, "GT"));
		players.add(new Player("Jos Buttler", "Wicketkeeper-Batter", true, false, false, "GT"));
		players.add(new Player("Kumar Kushagra", "Wicketkeeper-Batter", false, false, false, "GT"));
		players.add(new Player("Gerald Coetzee", "Bowler", true, false, true, "GT"));
		players.add(new Player("Gurnoor Brar", "Bowler", false, false, true, "GT"));
		players.add(new Player("Ishant Sharma", "Bowler", false, false, true, "GT"));
		players.add(new Player("Jayant Yadav", "Bowler", false, true, false, "GT"));
		players.add(new Player("Kagiso Rabada", "Bowler", true, false, true, "GT"));
		players.add(new Player("Kulwant Khejroliya", "Bowler", false, false, true, "GT"));
		players.add(new Player("Manav Suthar", "Bowler", false, true, false, "GT"));
		players.add(new Player("Mohammed Siraj", "Bowler", false, false, true, "GT"));
		players.add(new Player("Prasidh Krishna", "Bowler", false, false, true, "GT"));
		players.add(new Player("Rashid Khan", "Bowler", true, true, false, "GT"));

		//KKR
		players.add(new Player("Ajinkya Rahane", "Batter", false, false, false, "KKR"));
		players.add(new Player("Rinku Singh", "Batter", false, false, false, "KKR"));
		players.add(new Player("Angkrish Raghuvanshi", "Batter", false, false, false, "KKR"));
		players.add(new Player("Manish Pandey", "Batter", false, false, false, "KKR"));
		players.add(new Player("Luvnith Sisodia", "Wicketkeeper-Batter", false, false, false, "KKR"));
		players.add(new Player("Rahmanullah Gurbaz", "Wicketkeeper-Batter", true, false, false, "KKR"));
		players.add(new Player("Quinton de Kock", "Wicketkeeper-Batter", true, false, false, "KKR"));
		players.add(new Player("Andre Russell", "All-rounder", true, false, true, "KKR"));
		players.add(new Player("Ramandeep Singh", "All-rounder", false, false, true, "KKR"));
		players.add(new Player("Venkatesh Iyer", "All-rounder", false, false, true, "KKR"));
		players.add(new Player("Anukul Roy", "All-rounder", false, true, false, "KKR"));
		players.add(new Player("Moeen Ali", "All-rounder", true, true, false, "KKR"));
		players.add(new Player("Rovman Powell", "All-rounder", true, false, true, "KKR"));
		players.add(new Player("Sunil Narine", "All-rounder", true, true, false, "KKR"));
		players.add(new Player("Anrich Nortje", "Bowler", true, false, true, "KKR"));
		players.add(new Player("Vaibhav Arora", "Bowler", false, false, true, "KKR"));
		players.add(new Player("Harshit Rana", "Bowler", false, false, true, "KKR"));
		players.add(new Player("Umran Malik", "Bowler", false, false, true, "KKR"));
		players.add(new Player("Spencer Johnson", "Bowler", true, false, true, "KKR"));
		players.add(new Player("Mayank Markande", "Bowler", false, true, false, "KKR"));
		players.add(new Player("Varun Chakravarthy", "Bowler", false, true, false, "KKR"));

		//LSG
		players.add(new Player("Rishabh Pant", "Wicketkeeper-Batter", false, false, false, "LSG"));
		players.add(new Player("Nicholas Pooran", "Wicketkeeper-Batter", true, false, false, "LSG"));
		players.add(new Player("Aryan Juyal", "Wicketkeeper-Batter", false, false, false, "LSG"));
		players.add(new Player("Abdul Samad", "Batter", false, false, false, "LSG"));
		players.add(new Player("Ayush Badoni", "Batter", false, false, false, "LSG"));
		players.add(new Player("David Miller", "Batter", true, false, false, "LSG"));
		players.add(new Player("Himmat Singh", "Batter", false, false, false, "LSG"));
		players.add(new Player("Matthew Breetzke", "Batter", true, false, false, "LSG"));
		players.add(new Player("Aiden Markram", "All-rounder", true, false, false, "LSG"));
		players.add(new Player("Arshin Kulkarni", "All-rounder", false, false, false, "LSG"));
		players.add(new Player("Mitchell Marsh", "All-rounder", true, false, false, "LSG"));
		players.add(new Player("Rajvardhan Hangargekar", "All-rounder", false, false, false, "LSG"));
		players.add(new Player("Shahbaz Ahmed", "All-rounder", false, false, false, "LSG"));
		players.add(new Player("Yuvraj Chaudhary", "All-rounder", false, false, false, "LSG"));
		players.add(new Player("Akash Deep", "Bowler", false, false, true, "LSG"));
		players.add(new Player("Akash Singh", "Bowler", false, false, true, "LSG"));
		players.add(new Player("Avesh Khan", "Bowler", false, false, true, "LSG"));
		players.add(new Player("Digvesh Singh", "Bowler", false, false, false, "LSG"));
		players.add(new Player("M Siddharth", "Bowler", false, true, false, "LSG"));
		players.add(new Player("Mayank Yadav", "Bowler", false, false, true, "LSG"));
		players.add(new Player("Mohsin Khan", "Bowler", false, false, true, "LSG"));
		players.add(new Player("Prince Yadav", "Bowler", false, false, false, "LSG"));
		players.add(new Player("Ravi Bishnoi", "Bowler", false, true, false, "LSG"));
		players.add(new Player("Shamar Joseph", "Bowler", true, false, true, "LSG"));

		//MI
		players.add(new Player("Hardik Pandya", "All-rounder", false, false, false, "MI"));
		players.add(new Player("Arjun Tendulkar", "Bowler", false, false, false, "MI"));
		players.add(new Player("Ashwani Kumar", "Bowler", false, false, false, "MI"));
		players.add(new Player("Bevon-John Jacobs", "All-rounder", true, false, false, "MI"));
		players.add(new Player("Corbin Bosch", "All-rounder", true, false, false, "MI"));
		players.add(new Player("Deepak Chahar", "Bowler", false, false, false, "MI"));
		players.add(new Player("Jasprit Bumrah", "Bowler", false, false, false, "MI"));
		players.add(new Player("Karn Sharma", "Bowler", false, false, false, "MI"));
		players.add(new Player("Mitchell Santner", "All-rounder", true, false, false, "MI"));
		players.add(new Player("Mujeeb Ur Rahman", "Bowler", true, false, false, "MI"));
		players.add(new Player("Naman Dhir", "All-rounder", false, false, false, "MI"));
		players.add(new Player("Raj Angad Bawa", "All-rounder", false, false, false, "MI"));
		players.add(new Player("Reece Topley", "Bowler", true, false, false, "MI"));
		players.add(new Player("Robin Minz", "Wicketkeeper-Batter", false, false, false, "MI"));
		players.add(new Player("Rohit Sharma", "Batter", false, false, false, "MI"));
		players.add(new Player("Ryan Rickelton", "Wicketkeeper-Batter", true, false, false, "MI"));
		players.add(new Player("Shrijith Krishnan", "Wicketkeeper-Batter", false, false, false, "MI"));
		players.add(new Player("Suryakumar Yadav", "Batter", false, false, false, "MI"));
		players.add(new Player("Tilak Varma", "Batter", false, false, false, "MI"));
		players.add(new Player("Trent Boult", "Bowler", true, false, false, "MI"));
		players.add(new Player("Venkata Satyanarayana Penmetsa", "Bowler", false, false, false, "MI"));
		players.add(new Player("Vignesh Puthur", "Bowler", false, false, false, "MI"));
		players.add(new Player("Will Jacks", "All-rounder", true, false, false, "MI"));

		//PBKS
		players.add(new Player("Prabhsimran Singh", "Batter", false, false, false, "PBKS"));
		players.add(new Player("Shashank Singh", "All-rounder", false, false, false, "PBKS"));
		players.add(new Player("Glenn Maxwell", "All-rounder", true, false, false, "PBKS"));
		players.add(new Player("Marcus Stoinis", "All-rounder", true, false, false, "PBKS"));
		players.add(new Player("Nehal Wadhera", "All-rounder", false, false, false, "PBKS"));
		players.add(new Player("Marco Jansen", "All-rounder", true, false, false, "PBKS"));
		players.add(new Player("Harpreet Brar", "All-rounder", false, false, false, "PBKS"));
		players.add(new Player("Arshdeep Singh", "Bowler", false, false, false, "PBKS"));
		players.add(new Player("Yuzvendra Chahal", "Bowler", false, true, false, "PBKS"));
		players.add(new Player("Josh Inglis", "Wicketkeeper-Batter", true, false, false, "PBKS"));
		players.add(new Player("Aaron Hardie", "All-rounder", true, false, false, "PBKS"));
		players.add(new Player("Azmatullah Omarzai", "All-rounder", true, false, false, "PBKS"));
		players.add(new Player("Priyansh Arya", "Batter", false, false, false, "PBKS"));
		players.add(new Player("Pyla Avinash", "Bowler", false, false, false, "PBKS"));
		players.add(new Player("Xavier Bartlett", "Bowler", true, false, false, "PBKS"));
		players.add(new Player("Pravin Dubey", "Bowler", false, true, false, "PBKS"));
		players.add(new Player("Lockie Ferguson", "Bowler", true, false, false, "PBKS"));
		players.add(new Player("Musheer Khan", "All-rounder", false, false, false, "PBKS"));
		players.add(new Player("Kuldeep Sen", "Bowler", false, false, false, "PBKS"));
		players.add(new Player("Suryansh Shedge", "All-rounder", false, false, false, "PBKS"));
		players.add(new Player("Harnoor Singh", "Batter", false, false, false, "PBKS"));
		players.add(new Player("Yash Thakur", "Bowler", false, false, false, "PBKS"));
		players.add(new Player("Vyshak Vijaykumar", "Bowler", false, false, false, "PBKS"));
		players.add(new Player("Vishnu Vinod", "Wicketkeeper-Batter", false, false, false, "PBKS"));

		//RCB
		players.add(new Player("Rajat Patidar", "Batter", false, false, true, "RCB"));
		players.add(new Player("Virat Kohli", "Batter", false, false, false, "RCB"));
		players.add(new Player("Devdutt Padikkal", "Batter", false, false, false, "RCB"));
		players.add(new Player("Swastik Chikara", "Batter", false, false, false, "RCB"));
		players.add(new Player("Phil Salt", "Wicketkeeper-Batter", true, false, false, "RCB"));
		players.add(new Player("Jitesh Sharma", "Wicketkeeper-Batter", false, false, false, "RCB"));
		players.add(new Player("Liam Livingstone", "All-rounder", true, true, false, "RCB"));
		players.add(new Player("Krunal Pandya", "All-rounder", false, true, false, "RCB"));
		players.add(new Player("Tim David", "All-rounder", true, true, false, "RCB"));
		players.add(new Player("Jacob Bethell", "All-rounder", true, true, false, "RCB"));
		players.add(new Player("Romario Shepherd", "All-rounder", true, false, false, "RCB"));
		players.add(new Player("Swapnil Singh", "All-rounder", false, true, false, "RCB"));
		players.add(new Player("Manoj Bhandage", "All-rounder", false, false, false, "RCB"));
		players.add(new Player("Mohit Rathee", "All-rounder", false, true, false, "RCB"));
		players.add(new Player("Josh Hazlewood", "Bowler", true, false, false, "RCB"));
		players.add(new Player("Bhuvneshwar Kumar", "Bowler", false, false, false, "RCB"));
		players.add(new Player("Rasikh Salam Dar", "Bowler", false, false, false, "RCB"));
		players.add(new Player("Yash Dayal", "Bowler", false, false, false, "RCB"));
		players.add(new Player("Nuwan Thushara", "Bowler", true, false, false, "RCB"));
		players.add(new Player("Lungi Ngidi", "Bowler", true, false, false, "RCB"));
		players.add(new Player("Abhinandan Singh", "Bowler", false, false, false, "RCB"));
		players.add(new Player("Suyash Sharma", "Bowler", false, true, false, "RCB"));

		//RR
		players.add(new Player("Sanju Samson", "Wicketkeeper-Batter", false, false, true, "RR"));
		players.add(new Player("Dhruv Jurel", "Wicketkeeper-Batter", false, false, false, "RR"));
		players.add(new Player("Kunal Singh Rathore", "Wicketkeeper-Batter", false, false, false, "RR"));
		players.add(new Player("Nitish Rana", "Batter", false, false, false, "RR"));
		players.add(new Player("Shubham Dubey", "Batter", false, false, false, "RR"));
		players.add(new Player("Shimron Hetmyer", "Batter", true, false, false, "RR"));
		players.add(new Player("Yashasvi Jaiswal", "Batter", false, false, false, "RR"));
		players.add(new Player("Vaibhav Suryavanshi", "Batter", false, false, false, "RR"));
		players.add(new Player("Wanindu Hasaranga", "All-rounder", true, true, false, "RR"));
		players.add(new Player("Yudhvir Singh", "All-rounder", false, false, false, "RR"));
		players.add(new Player("Riyan Parag", "All-rounder", false, true, false, "RR"));
		players.add(new Player("Sandeep Sharma", "Bowler", false, false, false, "RR"));
		players.add(new Player("Akash Madhwal", "Bowler", false, false, false, "RR"));
		players.add(new Player("Jofra Archer", "Bowler", true, false, false, "RR"));
		players.add(new Player("Tushar Deshpande", "Bowler", false, false, false, "RR"));
		players.add(new Player("Fazalhaq Farooqi", "Bowler", true, false, false, "RR"));
		players.add(new Player("Ashok Sharma", "Bowler", false, false, false, "RR"));
		players.add(new Player("Kwena Maphaka", "Bowler", true, false, false, "RR"));
		players.add(new Player("Kumar Kartikeya", "Bowler", false, true, false, "RR"));
		players.add(new Player("Maheesh Theekshana", "Bowler", true, true, false, "RR"));

	}
	
	// Method to get all players
    public List<Player> getAllPlayers() {
        return players;
    }
    
    // Method to get player by name
    public Player getPlayerByName(String name) {
        return players.stream().filter(player -> player.getName().equalsIgnoreCase(name)).findFirst().orElse(null);
    }
    
    // Method to get players by team name
    public Map<String, List<Map<String, Object>>> getPlayersByTeamName(String teamName) {
        List<Player> playersByTeam = players.stream()
            .filter(player -> player.getTeamName().equalsIgnoreCase(teamName))
            .collect(Collectors.toList());

        List<Map<String, Object>> formattedPlayers = playersByTeam.stream()
            .map(player -> {
                Map<String, Object> playerMap = new HashMap<>();
                playerMap.put("name", player.getName());
                playerMap.put("designation", player.getDesignation());
                return playerMap;
            })
            .collect(Collectors.toList());

        Map<String, List<Map<String, Object>>> result = new HashMap<>();
        result.put(teamName, formattedPlayers);
        return result;
    }
    
    // Method to add new player
    public void addPlayer(Player player) {
        players.add(player);
    }
    
    // Method to update an existing player
    public void updatePlayer(String name, Player updatedPlayer) {
        Player player = getPlayerByName(name);
        if (player != null) {
            player.setDesignation(updatedPlayer.getDesignation());
            player.setForeigner(updatedPlayer.getForeigner());
            player.setSpinner(updatedPlayer.getSpinner());
            player.setFast(updatedPlayer.getFast());
            player.setTeamName(updatedPlayer.getTeamName());
        }
    }
    
    // Method to delete a player by name
    public void deletePlayer(String name) {
        players.removeIf(player -> player.getName().equalsIgnoreCase(name));
    }
    
    // Method to get formatted players
    public List<Map<String, Object>> getFormattedPlayers(List<Player> players) {
        List<Map<String, Object>> formattedPlayers = new ArrayList<>();
     
        for (Player player : players) {
            Map<String, Object> playerMap = new HashMap<>();
            playerMap.put("name", player.getName());
            playerMap.put("designation", player.getDesignation());
            if (player.getSpinner()) {
                playerMap.put("Spinner", true);
            }
            if (player.getFast()) {
                playerMap.put("Fast", true);
            }
            if (player.getForeigner()) {
                playerMap.put("Foreigner", true);
            }
            formattedPlayers.add(playerMap);
        }
        return formattedPlayers;
    }
}


