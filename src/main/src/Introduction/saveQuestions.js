import { db } from "../firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";

const generateTags = async (prompt) => {
    const apiKey = 'AIzaSyAbqRlxgoAU6OAZeuGxAHmDeszpmlUq81c'; // Replace with your API key
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
        })
    });

    if (!response.ok) {
        throw new Error('Failed to generate tags');
    }

    const data = await response.json();
    const generatedTagsString = data.candidates[0].content.parts[0].text;
    const generatedTagsArray = generatedTagsString.split(',').map(tag => tag.trim());
    
    console.log('Generated Tags:', generatedTagsArray);
    return generatedTagsArray;
};

export const saveQuestion = async (userAbout, sentenceAnswer, phone) => {
    try {
        // Step 1: Fetch tags from Firestore and convert to comma-separated string
        const tagsRef = collection(db, 'tags');
        const querySnapshot = await getDocs(tagsRef);
        const fetchedTags = querySnapshot.docs.map(doc => doc.id).join(', '); // Convert array to comma-separated string
        console.log('Fetched Tags:', fetchedTags);

        // Step 2: Generate tags using Gemini API with userAbout and fetchedTags included in prompt
        const prompt = `Act as algortihtm manager so you have to define the tags,you interviewed a candidate,His Intro is ${userAbout} you asked many questions,  ${sentenceAnswer} .now you need to give tags of person profile max 20 tags like if a person introduce himself as deoctor then you can make a tag doctor like this.and here is previous list of tags,you can use this exisitng tags also like new tags toh bana rahe ho but previous tags as it is bhi leskta ho  ${fetchedTags}. Format your response EXTREMELY strictly as follows. Do not deviate from this structure.each tag contain max 3 words,just give commas separated tags,no other formating,just gives plain text.STRICT GIVE PLAIN TEXT just Tag1,Tag2,Tag3`; // Example prompt including userAbout, sentenceAnswer, and fetchedTags
        const generatedTags = await generateTags(prompt);
        console.log('Generated Tags:', generatedTags);

        // Step 3: Update Firestore documents with generated tags and phone
        await updateTagsInFirestore(generatedTags, phone);

        console.log('Question saved successfully.');
    } catch (error) {
        console.error('Error saving question:', error);
    }
};

const updateTagsInFirestore = async (generatedTags, phone) => {
    try {
        const tagsRef = collection(db, 'tags');

        generatedTags.forEach(async (tag) => {
            const docRef = doc(tagsRef, tag);

            await setDoc(docRef, {
                userPhone: phone
            }, { merge: true });

            console.log(`Updated document '${tag}' with phone '${phone}'`);
        });

        console.log('Tags updated successfully.');
    } catch (error) {
        console.error('Error updating tags:', error);
    }
};
