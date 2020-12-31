(() => {
  const pages = ['basics1', 'basics2']

  const current = pages.filter(p => window.location.pathname.includes(p))[0]

  const parent = document.createElement('div')
  const body = document.body
  console.log(body)
  pages.map(page => {
    const a = document.createElement('a')
    a.innerText = page
    
    if(page !== current) {
      a.href = window.location.origin + '/' + page
      a.style = "display: inline-block; padding: 4px; color: white; border-radius: 2px; border: 1px solid #0984e3; margin: 3px; background-color: #0984e3; text-decoration: none"
    } else {
      a.style = "display: inline-block; padding: 4px; color: white; border-radius: 2px; border: 1px solid #ccc; margin: 3px; background-color: #ccc"
    }
    parent.appendChild(a);
  })
  body.insertBefore(parent, body.firstChild)
})()
