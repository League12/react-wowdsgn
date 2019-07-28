class Check extends React.Component{
    constructor() {
        super();
        this.state={
            list:[
                {'value':'苹果','checked':false},
                {'value':'橘子','checked':false},
                {'value':'凤梨','checked':false},
                {'value':'菠萝','checked':false},
                {'value':'无花果','checked':false},
                {'value':'火龙果','checked':false},
                {'value':'西瓜','checked':false},
            ],
            isAllChecked:false,
            color:'red',
            opacity:1
        }
    }
    isAllChecked(e){
        let bool = e.target.checked;
        if(bool){
            this.setState({
                isAllChecked : true
            })
            this.state.list.filter((item)=>{
                item.checked = true;
            })
        }else{
            this.setState({
                isAllChecked : false
            });
            this.state.list.filter((item)=>{
                item.checked = false;
            })
        }
        this.setState({
            list:this.state.list
        })
    }
    singleChecked(e,i){
        // i 就是下标
        this.state.list[i.index].checked = e.target.checked;
        this.setState({
            list:this.state.list
        });
        var bool=this.state.list.filter((item)=>{
            return !item.checked;   
        })
        if(bool.length == 0){
            this.setState({
                isAllChecked : true
            })
        }else{
            this.setState({
                isAllChecked : false
            })
        }
    }
    componentDidMount(){
        console.log("挂载完成");
        setInterval(()=>{
            let opa = this.state.opacity;
            opa >=0 ? opa=opa-0.1 : opa=1;
            this.setState({
                opacity:opa
            })
        },500)
    }
    render(){
        return(
            <div style={{'color':'red','fontSize':'20px'}}>
                <header style={{'opacity':this.state.opacity}}>全选练习</header>
                <div style={{'marginLeft':'30px'}}>
                    全选 <input type="checkbox" checked={this.state.isAllChecked ? true : false}  onChange={(e)=>{this.isAllChecked(e)}} /><br/><br/>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <div  key={index}>
                                  {item.value}  <input  type="checkbox"    value={item.value}  onChange={(e)=>{this.singleChecked(e,{index})}}  
                                  checked={item.checked ? true : false}  />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <Check />,
    document.getElementById("root")
)
