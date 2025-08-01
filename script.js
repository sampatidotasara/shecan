fetch('data.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('name').innerText = data.name
    document.getElementById('referralCode').innerText = data.referralCode
    document.getElementById('donations').innerText = data.donations
  })

