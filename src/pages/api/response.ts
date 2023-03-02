

async function Gen(searchVal: string) {

  console.log('Starting Gen Function');


  const response = await fetch(`api/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: `${searchVal}`
    }),
  })

  const data = await response.json();

  console.log('Ending Gen Function');


  return data
}

export default Gen;