#!/bin/bash
# Either use environment variables for NUM_CPU and DURATION, or define them here
let NUM_CPU=3;
let DURATION=20;
echo "Running "${NUM_CPU}" processes for "${DURATION}" seconds";
for i in `seq ${NUM_CPU}` ; do
    # Put an infinite loop on each CPU
    bash ./infinite_loop.sh &
done

# Wait DURATION seconds then stop the loops and quit
sleep ${DURATION}

ps -ef | grep bash
echo "Killing processes now";
pgrep -f infinite_loop | xargs kill
ps -ef | grep bash