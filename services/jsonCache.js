const fs = require("fs")
const axios = require("axios")

async function cacheResource(resourceName, resourceLoader) {
  const resource = await resourceLoader()
  const json = JSON.stringify(resource)
  const path = __dirname + "/../assets/cache/" + resourceName + ".json"
  return new Promise((resolve, reject) => {
    fs.writeFile(path, json, err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

async function main() {
  try {
    console.log("Fetching Data Init")
    await cacheResource("pumps", getPumps)
    console.log("Fetching Data Success")
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

const pumps = {
  "4734": { latitude: 13.74180294, longitude: 106.9793701 },
  "4762": { latitude: 13.8653917, longitude: 107.0437533 },
  "4736": { latitude: 13.74180294, longitude: 106.9793701 },
  "4742": { latitude: 13.68651955, longitude: 107.2160912 },
  "4760": { latitude: 13.74180294, longitude: 106.9793701 },
  "4763": { latitude: 13.66288, longitude: 104.0218467 },
  "4764": { latitude: 13.66423349, longitude: 104.0051294 },
  "4715": { latitude: 13.66048333, longitude: 104.0075117 },
}
const url =
  "https://dashboard.welldone.org/.netlify/functions/get_momo_status?id="
async function getPumps() {
  let results = []
  await asyncForEach(Object.keys(pumps), async (pump, index) => {
    try {
      console.log(`${index + 1}/${Object.keys(pumps).length}`)
      const res = await axios.get(`${url}${pump}`)
      results.push({ id: pump, ...pumps[pump], ...res.data })
    } catch (err) {
      console.error(`Error on pump #${pump}`)
      results.push({ id: pump, ...pumps[pump], status: 0, error: "500" })
    }
  })

  return { lastFetch: Date.now(), pumps: results }
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

main()
