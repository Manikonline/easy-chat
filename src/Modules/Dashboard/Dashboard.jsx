import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'


const Dashboard = () => {
       const users=[
        {
            name:"Manik",
            image:"https://i.ibb.co/Hx5ps08/Pics-Art-02-02-11-03-53-removebg-preview-1-fotor-20230629183723.png"

        },
        {
            name:"Manik",
            image:"https://i.ibb.co/Hx5ps08/Pics-Art-02-02-11-03-53-removebg-preview-1-fotor-20230629183723.png" 
        },
        {
            name:"Manik",
            image:"https://i.ibb.co/Hx5ps08/Pics-Art-02-02-11-03-53-removebg-preview-1-fotor-20230629183723.png"
        }
       ]
    return (
        <div className='row dashboard-section '>
            <div className="col-lg-3 col-sm-3 info-section border border-black  ">
                <div className="flex ms-2 mt-2">
                    <img className="userImgg" src="https://i.ibb.co/Hx5ps08/Pics-Art-02-02-11-03-53-removebg-preview-1-fotor-20230629183723.png" alt="" />
                    <div className='user-info'>
                        <span>Name</span><br />
                        <span>My Account</span>
                    </div>
                </div>

                <h5 className='ms-2 my-2'>Message</h5>
                {
                  users.map(singleUser=><><div className='flex user-list  ms-2 mt-2' key={singleUser.id}><img className="userImgg" src={singleUser.image} alt="" /> <div  className='mt-2 ms-1  '>{singleUser.name}</div></div> <hr /></>)
                }
              
            </div>
            <div className="col-lg-6 col-sm-6 border border-black">fg</div>
            <div className="col-lg-3 col-sm-3 border border-black">gfg</div>
        </div>
    );
};

export default Dashboard;