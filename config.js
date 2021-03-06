require("dotenv").config();
let env_variables = ["token", "channel_id", "times_id", "admin_id", "email", "prefix", "db_uri", "smsacc_id", "smsacc_token", "smsacc_numbers"];
let env_variables_object = {};
env_variables.forEach(x => {
	if (!process.env[x.toUpperCase()]) throw new Error(`Sorry, but ${x} is not present in the .env file. You can add it like this: ${x.toUpperCase()}=EXPECTEDVALUE`);
	env_variables_object[x] = process.env[x.toUpperCase()];
});

module.exports = env_variables_object;