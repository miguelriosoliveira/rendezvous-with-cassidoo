echo 'Generating index...'

for year_dir in src/*; do
	year=$(echo $year_dir | cut -d"/" -f2)
	echo "\n#### $year\n"
	for dir in $year_dir/*; do
		question=$(echo $dir | cut -d"/" -f3)
		question_number=$(echo $question | cut -d"-" -f1)
		question_name=$(echo $question | cut -d"-" -f2)
		echo "- [$question_number - $question_name]($dir)"
	done
done
