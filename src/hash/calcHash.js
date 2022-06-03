import crypto from 'crypto';

export const calculateHash = async () => {
  const hash = crypto.createHash('sha256', './files/fileToCalculateHashFor.txt').digest('hex');
  console.log(hash)
  return hash
};

calculateHash();