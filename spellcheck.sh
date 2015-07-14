for f in _posts/2006*
do
	aspell check --master=en_GB "$f"
done

rm _posts/*.bak
