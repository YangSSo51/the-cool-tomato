package com.wp.broadcast.domain.live.service;

public interface StormService {
    public String startStormApplication(String kafkaTopic);
    public boolean checkStormApplication(String applicationId);
    public String stopStormApplication(String applicationId);
}
