#!/bin/bash
for file in *.JPG
do
	NFILE="$(echo "$file" | sed 's/\([0-9]*\).JPG/\1-th.jpg/')"
	cp $file $NFILE
done
