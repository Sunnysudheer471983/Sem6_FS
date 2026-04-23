package com.example.livepoll.controller;

import com.example.livepoll.model.Poll;
import com.example.livepoll.service.PollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private PollService pollService;

    @GetMapping("/user")
    public String user(@AuthenticationPrincipal OAuth2User principal) {
        return "Hello, " + principal.getAttribute("name");
    }

    @GetMapping("/public")
    public String publicEndpoint() {
        return "This is public";
    }

    @GetMapping("/polls")
    public List<Poll> getPolls() {
        return pollService.getAllPolls();
    }

    @PostMapping("/polls")
    @PreAuthorize("hasRole('ADMIN')")
    public Poll createPoll(@RequestBody Poll poll) {
        return pollService.createPoll(poll);
    }

    @PostMapping("/polls/{id}/vote")
    @PreAuthorize("hasRole('USER')")
    public Poll vote(@PathVariable Long id, @RequestParam int option) {
        return pollService.vote(id, option);
    }
}