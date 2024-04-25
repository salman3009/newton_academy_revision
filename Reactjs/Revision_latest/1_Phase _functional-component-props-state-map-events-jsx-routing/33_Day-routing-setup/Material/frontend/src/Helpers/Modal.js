import './Modal.css';

function Modal(props) {

    return (
      <div className='custom-modal'>
         <form>
          <div class="form-group">
            <label htmlFor="productName">Product Name</label>
            <input type="text" className="form-control" value={props.productName} onChange={props.onChangeHandler} id="productName" name="productName" />
          </div>
          <div class="form-group">
            <label htmlFor="price">Price</label>
            <input type="number" className="form-control" value={props.price} onChange={props.onChangeHandler} id="price" name="price" />
          </div>
        </form>
        <button type="button" onClick={props.onClose}  class="btn btn-secondary">Close</button>
        <button type="button" style={{marginLeft:'10px'}} onClick={props.onUpdateSubmitDetails} class="btn btn-primary">Save changes</button>
      </div>
    );
  }
  
  export default Modal;
  