About = "/* CSS Assembler \n  " + \
	"This script assembles CSS that has been sharded with imports. \n  " + \
	"or it would if it were finished, anyway. \n  " + \
	"Note that relative paths are a work in progress. \n  */"

DefaultPath = "Skltl.expanded.css"

import os

def TrimImportPath(x):
	# "@import url('foo')" => "foo"
	return x.removeprefix('@import').strip().removeprefix("url(").removesuffix(")").strip()[0:-2]

def JoinPath(Path, Line):
	x = os.path.join( os.path.dirname(Path), Line)
	return x

def ProcessFile(Path):
	NewFile = ""
	with open(Path) as File:
		for Line in File:
			if(Line.startswith("@import")):
				imported = JoinPath(Path,TrimImportPath(Line))
				NewFile += ("/*" + imported + "*/")
				NewFile += ProcessFile(imported)
			else:
				NewFile += Line
	return NewFile

def Main():
	print(About)
	# Path = input("Enter path to the root file of CSS. \n(Blank defaults to "+DefaultPath+") \n>")
	print("Starting with " + os.path.join(os.path.dirname(__file__),DefaultPath))
	Path = os.path.join(os.path.dirname(__file__),DefaultPath)
	# if(Path == ""): 
		# Path = DefaultPath
	NewFile = ProcessFile(Path)
	print(NewFile)
	with open("Skltl.min.css", 'w') as SaveFile: SaveFile.write(NewFile)
Main()