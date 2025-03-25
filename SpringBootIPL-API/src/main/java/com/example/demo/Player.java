package com.example.demo;

public class Player {
	    private String name;
	    private String designation;
	    private Boolean foreigner;
	    private Boolean spinner;
	    private Boolean fast;
	    private String teamName;

		// Constructor
	    public Player(String name, String designation, Boolean foreigner, Boolean spinner, Boolean fast,String teamName) {
	        this.name = name;
	        this.designation = designation;
	        this.foreigner = foreigner;
	        this.spinner = spinner;
	        this.fast = fast;
	        this.teamName = teamName;
	    }

	    // Getters and Setters
	    public String getName() {
	        return name;
	    }

	    public void setName(String name) {
	        this.name = name;
	    }

	    public String getDesignation() {
	        return designation;
	    }

	    public void setDesignation(String designation) {
	        this.designation = designation;
	    }

	    public Boolean getForeigner() {
	        return foreigner;
	    }

	    public void setForeigner(Boolean foreigner) {
	        this.foreigner = foreigner;
	    }

	    public Boolean getSpinner() {
	        return spinner;
	    }

	    public void setSpinner(Boolean spinner) {
	        this.spinner = spinner;
	    }

	    public Boolean getFast() {
	        return fast;
	    }

	    public void setFast(Boolean fast) {
	        this.fast = fast;
	    }
	    public String getTeamName() {
			return teamName;
		}

		public void setTeamName(String teamName) {
			this.teamName = teamName;
		}
	}
