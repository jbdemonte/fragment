# jquery.fragment

A simple, lightweight jQuery plugin for using HTML document fragments.

## Presentation

This plugin adds some functions to handle document fragments which is an easy way to optimize DOM insertions.

Using fragment is as easy as using native append / prepend jQuery functions. Appening or prepending data will automatically create a fragment available to be append / prepend to the current element once all the elements has been generated.

## Usage

### .appendToFragment(content) 

Insert content, specified by the parameter, to the end of the fragment.

### .appendToFragment(content) 

Insert content, specified by the parameter, to the beginning of the fragment.

### .appendFragment()

Insert current fragment to the end of the current element. 
Fragment is then reset.

### .prependFragment()

Insert current fragment to the beginning of the current element. 
Fragment is then reset.

### .removeFragment()
Reset the current fragment.