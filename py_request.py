import requests;
import pprint;

pp = pprint.PrettyPrinter(indent=4);
######################################
#Response of GET Request
get_res = requests.get("http://0de6bb8b.ngrok.io/");
#pp.pprint(get_res.json());

get_obj = get_res.json();
#pp.pprint(get_obj[0]);

print(len(get_obj));

#####################################
#Response of POST Request
#post_res = requests.post("http://0de6bb8b.ngrok.io/images/add",json={"name":"Aniqa","url":"www.aniqa.com"});
#print(post_res);
