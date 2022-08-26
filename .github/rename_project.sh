#!/usr/bin/env bash
while getopts a:n: flag
do
    case "${flag}" in
        a) author=${OPTARG};;
        n) name=${OPTARG};;
    esac
done

echo "Author: $author";
echo "Project Name: $name";

echo "Renaming project..."

original_author="leancomp"
original_name="clean-arch-ts"
# for filename in $(find . -name "*.*") 
for filename in $(git ls-files) 
do
    sed -i "s/$original_author/$author/g" $filename
    sed -i "s/$original_name/$name/g" $filename
    echo "Renamed $filename"
done

# This command runs only once on GHA!
rm -rf .github/template.yml
