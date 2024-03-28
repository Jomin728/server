const states = {
    PENDING:0,
    FULFILLED:1,
    REJECTED:2
}

class Promise {
    constructor(callback)
    {
     this.state = states.PENDING;
     this.value = undefined;
     this.handlers = [];
     try{
       callback(this._resolve,this._reject)
     }
     catch(error){
       this._reject(error)
     }
    }
    _resolve=(value)=>
    {
     this._handleUpdate(states.FULFILLED,value)
    }
    _reject=(value)=>
    {
     this._handleUpdate(states.REJECTED, value);
    }
    _handleUpdate=(state,value)=>
    {
      if (state === this.states.PENDING)
      return;

      setTimeout(() => {
        if (value instanceof MyPromise) {
            value.then(this._resolve, this._reject);
            }
            this.state=state
            this.value=value
            this._executeHandlers()
      }, 0);
    }
    _executeHandlers = ()=>{
        if (this.state === this.states.PENDING)
        return;
        this.handlers.forEach((handler) => {
            if (this.state === states.FULFILLED) {
            return handler.onSuccess(this.value);
            }
            return handler.onFailure(this.value);
            })
        this.handlers = []
  
    }
    _addHandler=(handler)=>{
      this.handlers.push(handler)
      this._executeHandlers()
    }  
    then=(onSuccess,onFailure)=>
    {
        return new MyPromise((resolve, reject) => {
            this._addHandler({
            onSuccess: (value) => {
            if (!onSuccess) {
            return resolve(value);
            }
            try {
            return resolve(onSuccess(value));
            } catch (error) {
            reject(error);
            }
            },
            onFailure: (value) => {
            if (!onFailure) {
            return reject(value);
        }
        try {
        return reject(onFailure(value));
        } catch (error) {
        return reject(error);
        }
        }
        })
        })
        
    }
    catch = (onFailure) => {
        return this.then(null, onFailure);
        };
}