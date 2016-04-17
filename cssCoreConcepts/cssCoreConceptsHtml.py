from django.shortcuts import render

def introduction(reques):
	return render(reques, "chap01cssIntroduction.html", {})
