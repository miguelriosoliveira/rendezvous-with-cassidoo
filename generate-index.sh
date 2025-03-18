new_index="<details>\n\t<summary>Click to expand!</summary>"

for year_dir in src/*; do
	year=$(echo $year_dir | cut -d"/" -f2)
	# skips if not a number
	if ! [[ $year =~ ^[0-9]+$ ]]; then
		continue
	fi
	new_index="${new_index}\n\n#### $year\n"
	for dir in $year_dir/*; do
		question=$(echo $dir | cut -d"/" -f3)
		question_number=$(echo $question | cut -d"-" -f1)
		question_name=$(echo $question | cut -d"-" -f2)
		new_index="${new_index}\n- [$question_number - $question_name]($dir)"
	done
done

awk -v new_index="${new_index}" '
  BEGIN { flag = 0 }
  /<details>/ { print new_index; flag = 1; next }
  /<\/details>/ { flag = 0 }
  !flag { print }' README.md > README-tmp.md

mv README-tmp.md README.md
