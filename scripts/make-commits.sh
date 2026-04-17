#!/usr/bin/env bash
set -euo pipefail

MIN=${MIN_COMMITS:-5}
MAX=${MAX_COMMITS:-10}
RANGE=$((MAX - MIN + 1))
N=$((RANDOM % RANGE + MIN))

MESSAGES=(
  "chore: update activity log"
  "tick"
  "update log"
  "chore: bump counter"
  "log: heartbeat"
  "chore: daily ping"
  "update activity"
  "chore: refresh"
)

LOG_FILE="activity.log"
SUMMARY_FILE="commits.json"
touch "$LOG_FILE"

# Read existing counter
COUNTER=$(grep -c '^' "$LOG_FILE" || echo 0)

TIMESTAMPS=()
MSGS=()

for i in $(seq 1 "$N"); do
  COUNTER=$((COUNTER + 1))
  TS=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
  echo "$COUNTER $TS" >> "$LOG_FILE"
  MSG="${MESSAGES[$RANDOM % ${#MESSAGES[@]}]}"
  git add "$LOG_FILE"
  git commit -m "$MSG" >/dev/null
  TIMESTAMPS+=("\"$TS\"")
  MSGS+=("\"$MSG\"")
  sleep 1
done

DATE=$(date -u +"%Y-%m-%d")
TS_JSON=$(IFS=,; echo "${TIMESTAMPS[*]}")
MSG_JSON=$(IFS=,; echo "${MSGS[*]}")

cat > "$SUMMARY_FILE" <<EOF
{
  "lastRun": "$DATE",
  "count": $N,
  "timestamps": [$TS_JSON],
  "messages": [$MSG_JSON]
}
EOF

git add "$SUMMARY_FILE"
git commit -m "chore: update summary" >/dev/null
echo "Made $N commits"

