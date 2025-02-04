const fileSystem = require('node:fs');

const fileName = "file_example_MP3_700KB";
let readAudioFile;

try {
	readAudioFile = fileSystem.readFileSync(`${fileName}.mp3`);
	console.log(readAudioFile);
} catch (error) {
	console.log("This is the value of the readAudioFile when empty ", readAudioFile);
	console.error("Error when reading the file ", error);
}

if (readAudioFile) {
	console.log("The readAudioFile is working correctly.");
	const audioObject = {};
	audioObject["audioData"] = readAudioFile.toString('base64');
	try {
		fileSystem.writeFileSync(`${fileName}.json`, JSON.stringify(audioObject));
		console.log("File created successfully.");
	} catch (error) {
		console.error("Error when creating json file ", error);
	}
} else {
	console.log("The error is displayed correctly.");
}


console.log("READING THE JSON FILE");

let audioObjectData;

try {
	audioObjectData = fileSystem.readFileSync(`${fileName}.json`);
	console.log("JSON file read successfully.");
	const audioJsonData = JSON.parse(audioObjectData);
	console.log("file data is parsed into json ", audioJsonData);
	const audioRecoveredBinary = Buffer.from(audioJsonData.audioData, 'base64');
	console.log("The recovered binary data is ", audioRecoveredBinary);
	try {
		fileSystem.writeFileSync(`${fileName}_converted_audio.mp3`, audioRecoveredBinary);
		console.log("The file is converted into audio successfully.");
	} catch (error) {
		console.log("Error when creating the new audio file ", error);
	}
} catch (error) {
	console.error("Error when reading json file and creating new audio file ", error);
}
