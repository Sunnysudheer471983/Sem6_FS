package com.example.livepoll.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Poll {

    @Id
    @GeneratedValue
    private Long id;

    private String question;

    private String option1;

    private String option2;

    private int votes1 = 0;

    private int votes2 = 0;

    // Constructors
    public Poll() {}

    public Poll(String question, String option1, String option2) {
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getQuestion() { return question; }
    public void setQuestion(String question) { this.question = question; }

    public String getOption1() { return option1; }
    public void setOption1(String option1) { this.option1 = option1; }

    public String getOption2() { return option2; }
    public void setOption2(String option2) { this.option2 = option2; }

    public int getVotes1() { return votes1; }
    public void setVotes1(int votes1) { this.votes1 = votes1; }

    public int getVotes2() { return votes2; }
    public void setVotes2(int votes2) { this.votes2 = votes2; }
}