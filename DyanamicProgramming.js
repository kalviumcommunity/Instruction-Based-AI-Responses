

function selectBestSequence(sequences, probs) {
    if (sequences.length === 0) return { sequence: [], probability: 0 };

    let bestIndex = 0;
    let bestProb = 0;

    for (let i = 0; i < sequences.length; i++) {
        let seqProb = 1;
        for (let j = 0; j < sequences[i].length; j++) {
            if (probs[i] && probs[i][j] != null) {
                seqProb *= probs[i][j]; 
            } else {
                seqProb *= 1; 
            }
        }
        if (seqProb > bestProb) {
            bestProb = seqProb;
            bestIndex = i;
        }
    }

    return { sequence: sequences[bestIndex], probability: bestProb };
}

// Example
const sequences = [
    ['Hello', 'world'],
    ['Hi', 'planet'],
    ['Hello', 'planet']
];

const probs = [
    [0.8, 0.7],
    [0.6, 0.9],
    [0.7, 0.8]
];

console.log(selectBestSequence(sequences, probs));
