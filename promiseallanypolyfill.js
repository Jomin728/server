const mypromiseAll = function(tasklist)
{
  const results = []
  let promisesCompleted = 0;

  return new Promise((resolve,reject)=>{
    tasklist.forEach((element,index) => {
        element.then((val)=>{
            promisesCompleted+=1;
            results[index] = val;
            if(promisesCompleted === tasklist.length)
            resolve(results)
        })
        .catch((error) => {
            reject(error)
        })
    });
  })
}

const mypromiseAny = function(tasklist)
{
  let promisesCompleted = 0;
  let errors=[]
  return new Promise((resolve,reject)=>{
    tasklist.forEach((element,index)=>{
      element.then((value)=>{
        resolve(value)
      })
      .catch((error)=>{
        errors[index] = error
        promisesCompleted+=1
        if(promisesCompleted == tasklist.length)
        reject(errors)
      })
    })
  })
}

const mypromiseRace = function(tasklist)
{
  let promisesCompleted = 0;
  let errors=[]
  return new Promise((resolve,reject)=>{
    tasklist.forEach((element)=>{
      Promise.resolve(element)
      .then(resolve, reject)
      .catch(reject);
      
    })
  })
}

Promise.prototype.finally = function(callback)
{
  if (typeof callback !== 'function') {
    return this.then(callback, callback);
    }
  
  const P = this.constructor || Promise;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    err => P.resolve(callback()).then(() => { throw err; })
    );
}

function mypromiseAllSettled(promiseArray)
{
  let finalresult = []
  let resolvedPromiseCount = 0 
  return new Promise((resolve,reject)=>{
   promiseArray.forEach((value,index)=>{
    value.then((result)=>{
      finalresult[index] = result
      if(resolvedPromiseCount == promiseArray.length)
      resolve(finalresult)
    })
    .catch((error)=>{
      finalresult[index] = error
      if(resolvedPromiseCount == promiseArray.length)
      resolve(finalresult)

    })
   })
  })

}

function mypromiseAllSettled(promiseArray)
{
  let finalresult = []
  let resolvedPromiseCount = 0 
   promiseArray.forEach((value,index)=>{
    Promise.resolve(value).then((result)=>{
      return {value:result}
    },(error)=>{
      return {error:error}
    })
   })
}



//custom promise
