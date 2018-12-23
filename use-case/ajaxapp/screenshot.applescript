do shell script "/usr/sbin/screencapture -iW " & "ss_" & ((do shell script "date +%s") as string) & ".png"
