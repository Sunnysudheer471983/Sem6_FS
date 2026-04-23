package com.example.livepoll.service;

import com.example.livepoll.model.Poll;
import com.example.livepoll.repository.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PollService {

    @Autowired
    private PollRepository pollRepository;

    public List<Poll> getAllPolls() {
        return pollRepository.findAll();
    }

    public Optional<Poll> getPollById(Long id) {
        return pollRepository.findById(id);
    }

    public Poll createPoll(Poll poll) {
        return pollRepository.save(poll);
    }

    public Poll vote(Long id, int option) {
        Optional<Poll> pollOpt = pollRepository.findById(id);
        if (pollOpt.isPresent()) {
            Poll poll = pollOpt.get();
            if (option == 1) {
                poll.setVotes1(poll.getVotes1() + 1);
            } else if (option == 2) {
                poll.setVotes2(poll.getVotes2() + 1);
            }
            return pollRepository.save(poll);
        }
        return null;
    }
}