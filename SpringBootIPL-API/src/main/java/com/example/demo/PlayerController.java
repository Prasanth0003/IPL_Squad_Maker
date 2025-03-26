package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class PlayerController {

    @Autowired
    private PlayerService playerService;

    @GetMapping("/players")
    public List<Player> getAllPlayers() {
        return playerService.getAllPlayers();
    }
    
    @GetMapping("/players/team/{teamName}")
    public Map<String, List<Map<String, Object>>> getFormattedPlayersByTeamName(@PathVariable String teamName) {
        return playerService.getPlayersByTeamName(teamName);
    }
    @GetMapping("/players/{name}")
    public Player getPlayerByName(@PathVariable String name) {
        return playerService.getPlayerByName(name);
    }

    @PostMapping("/players")
    public void addPlayer(@RequestBody Player player) {
        playerService.addPlayer(player);
    }

    @PutMapping("/players/{name}")
    public void updatePlayer(@PathVariable String name, @RequestBody Player updatedPlayer) {
        playerService.updatePlayer(name, updatedPlayer);
    }

    @DeleteMapping("/players/{name}")
    public void deletePlayer(@PathVariable String name) {
        playerService.deletePlayer(name);
    }
}
