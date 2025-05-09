const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from the specified path
dotenv.config({ path: path.resolve(__dirname, 'secret/.dev.env') });

// Log the loaded environment variables (optional)
console.log('Loaded environment variables:', process.env);
