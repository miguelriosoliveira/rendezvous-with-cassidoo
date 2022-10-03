echo 'Generating index...'

for dir in src/*; do
	question=$(echo $dir | cut -d"/" -f2)
	question_number=$(echo $question | cut -d"-" -f1)
	question_name=$(echo $question | cut -d"-" -f2)
  echo "- [$question_number - $question_name]($dir)"
done
