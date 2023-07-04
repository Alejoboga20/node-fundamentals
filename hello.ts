const mission = process.argv[2] || 'learn';

if (mission === 'learn') {
	console.log('Keep going!');
} else {
	console.log(`Is ${mission} really your mission?`);
}
