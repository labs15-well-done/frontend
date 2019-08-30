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

const pumps = ["4734", "4762", "4736", "4742", "4760", "4763", "4764", "4715"]
const url =
  "https://dashboard.welldone.org/.netlify/functions/get_momo_status?id="
async function getPumps() {
  let results = []
  await asyncForEach(pumps, async (pump, index) => {
    try {
      console.log(`${index + 1}/${pumps.length}`)
      const res = await axios.get(`${url}${pump}`)
      results.push({ id: pump, ...res.data })
    } catch (err) {
      console.error(`Error on pump #${pump}`)
      results.push({ id: pump, status: 0, error: "500" })
    }
  })

  return results
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

main()
