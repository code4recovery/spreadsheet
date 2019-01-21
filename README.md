# Simple Meeting List from a Google Sheet

This project provides a way for websites with small meeting lists to join the [Meeting Guide app](https://meetingguide.org/) while making only minor changes to their existing website.

## Instructions

1. create a Google Sheet in the Meeting Guide format (see [Carteret County's sheet](https://docs.google.com/spreadsheets/d/e/2PACX-1vQJ5OsDCKSDEvWvqM_Z6tmXe4N-VYEnEAfvU5PX5QXZjHVbnrX-aeiyhWnZp0wpWtOmWjO4L5GJtfFu/pubhtml) as an example)

1. enter your meeting info

1. publish your Google Sheet to the web (File > Publish to the Web...)

1. get the sheet ID (the alphanumeric string in the Sheet's edit URL, eg https://docs.google.com/spreadsheets/d/_**this-is-your-sheet-id**_/edit#gid=0)

1. paste the following code into your webpage where you want to go
	
	```
	<script src="https://spreadsheet.meetingguide.org/spreadsheet.js?id=sheet-id-goes-here"></script>
	```

1. replace `sheet-id-goes-here` with your ID from step 2

You should now be good to go. See [carteret-county.html](carteret-county.html) as an example.

## FAQ

* your Google Sheet must be published to the web for this to work

* feel free to style your output as needed with CSS