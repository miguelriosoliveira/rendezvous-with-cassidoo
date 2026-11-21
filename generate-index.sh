#!/usr/bin/env bash

set -euo pipefail

new_index='<details>
	<summary>Click to expand!</summary>'

for year_dir in src/*; do
	year="${year_dir##*/}"
	if [[ ! $year =~ ^[0-9]+$ ]]; then
		continue
	fi
	new_index+=$'\n\n#### '"$year"$'\n'
	for dir in "$year_dir"/*; do
		question="${dir##*/}"
		question_number="${question%%-*}"
		question_name="${question#*-}"
		new_index+=$'\n- ['"$question_number - $question_name"']('"$dir"')'
	done
done

tmp_dir=$(mktemp -d .readme-index.XXXXXX)
trap 'rm -rf -- "$tmp_dir"' EXIT

GENERATED_README_INDEX="$new_index" awk '
  BEGIN { flag = 0 }
  /<details>/ { print ENVIRON["GENERATED_README_INDEX"]; flag = 1; next }
  /<\/details>/ { flag = 0 }
  !flag { print }' README.md > "$tmp_dir/README.md"

mv "$tmp_dir/README.md" README.md
