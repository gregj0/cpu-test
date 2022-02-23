#!/bin/bash


foo () {
    local run=$1
    echo "Starting ${run}";
    local START_TIME=$SECONDS
    #echo $((13**99)) 1>/dev/null 2>&1
    echo 'scale=6000;pi=4*a(1);0' | bc -l;
    local ELAPSED_TIME=$(($SECONDS - $START_TIME))
    echo "Finishing ${run} in ${ELAPSED_TIME} seconds";
    }

for run in {1..4}; 
    do 
        foo "$run" & 
    done