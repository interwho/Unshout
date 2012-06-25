//Simple Script For Converting ALL CAPS to Proper Case
//Extension By: interwho

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

document.body.innerHTML = toTitleCase(document.body.innerHTML);