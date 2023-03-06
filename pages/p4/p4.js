/*
export function initP4() {
    const id = 3
    fetch('https://api.punkapi.com/v2/beers/' + id)
      .then(res => res.json())
      .then(data => {
        const beer = data[0]
        updateUI(beer)
      })
      .catch(e => alert(e))
  }
  */
  
  export async function initP4() {
    try{
        const id = 3 //Get id from UI
        const beer = await getBeer(id)
        updateUI(beer) 
    }catch (err){
    alert(err)
    }
  }
  
  async function getBeer(beerId) {
    const beers = await fetch('https://api.punkapi.com/v2/beers/' + beerId)
    .then(res => {
        if(!res.ok){
            throw new Error ("Could not find beer")
        }
        return res.json()
    })
    console.log("1",beers)
    return beers[0]
  }
  
  function updateUI(beer) {
    document.getElementById("name").innerText = beer?.name
    document.getElementById("tagline").innerText = beer?.tagline
  }
  