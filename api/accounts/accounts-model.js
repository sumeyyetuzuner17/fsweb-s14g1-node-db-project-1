const getAll = () => {
  // KODLAR BURAYA
   //select * from accounts
   return db("accounts");
}

const getById = id => {
  // KODLAR BURAYA
  //select * from accounts where id=id
  return db("accounts").where({id}).first();
}

const create = account => {
  // KODLAR BURAYA
    //insert into account values (id,name,budget)
    

}

const updateById = (id, account) => {
  // KODLAR BURAYA
}

const deleteById = id => {
  // KODLAR BURAYA
    //delete from accounts where id=id
    return db('accounts')
    .where('id', id)
    .del();
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
