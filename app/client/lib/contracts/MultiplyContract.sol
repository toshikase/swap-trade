contract MultiplyContract{
    address public fixed_side;
    address public floated_side;
    uint public price;
    uint public expired_date;
    uint public fixed_rate;
    uint public spread;
    mapping (address => uint) public balanceOfJPY;
    function MultiplyContract(
      address _fixed_side,
      address _floated_side,
      uint _price,
      uint _expired_date,
      uint _fixed_rate,
      uint _spread
      ){
      fixed_side = _fixed_side;
      floated_side = _floated_side;
      price = _price;
      expired_date = _expired_date;
      fixed_rate = _fixed_rate;
      spread = _spread;
    }
    function Execution(uint tibor){
      fixed_side.send(price*fixed_rate);
      floated_side.send(price*(tibor+spread));
    }
    function Edit(uint _fixed_rate, uint _price){
      fixed_rate = _fixed_rate;
      price = _price;
    }
    function () {
      throw;
    }
}
