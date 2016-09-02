var context = require.context('./test/client', true, /test\.jsx?$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);