const TARGET = process.env.npm_lifecycle_event

if (TARGET === 'dev') {
	console.log(`Runing the dev task!`)
}

if (TARGET === 'predev') {
	console.log(`Runing the predev tast!`)
}

if (TARGET === 'postdev') {
	console.log(`Runing the postdev tast!`)
}