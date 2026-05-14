const key = "AIzaSyAD0ymWJf3YmC587w6xJYcxi9sKeqsDvBM";
fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`)
.then(res => res.json())
.then(data => console.log(data.error ? data : "Success, models loaded!"))
.catch(console.error);
