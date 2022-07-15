import React, { Component } from 'react';

class MyProfile extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className="fixed inset-0 bg-zinc-900" style={{zIndex:-10}}/>
                <div className="flex flex-col max-w-lg p-1 m-auto py-10 px-10 z-10 mt-40">
                    <h1 className="text-3xl md:text-5xl font-bold text-red-700 text-left md:leading-loose mb-5">Your Profile</h1>
                    <div className="flex items-center border-b-2 pb-5">
                        <img src="https://3.bp.blogspot.com/-UI5bnoLTRAE/VuU18_s6bRI/AAAAAAAADGA/uafLtb4ICCEK8iO3NOh1C_Clh86GajUkw/s320/guest.png" alt="user" className="h-20 "/>
                        <div className="ml-2 md:ml-5 space-y-3 w-full text-left">
                            <div className="px-4 py-2 w-full bg-zinc-500 rounded-md text-gray-300">{this.props.user.name}</div>
                            <div className="px-4 py-2 w-full bg-zinc-500 rounded-md text-gray-300">{this.props.user.email}</div>
                        </div>
                    </div>
                    <div className="flex items-center border-b-2 py-5">
                        <div className="w-full text-left space-y-5">
                            <p className="text-sm md:text-base text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <button className="w-full md:w-auto rounded-md text-white text-lg px-7 py-1.5 border hover:opacity-70">Edit</button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-3 md:space-x-3 mt-5">
                        <button className="rounded-md text-zinc-900 bg-white font-semibold text-lg px-7 py-1.5 border hover:opacity-70">Save</button>
                        <button className="rounded-md text-gray-400 text-lg px-7 py-1.5 border border-gray-400 hover:opacity-70">Cancel</button>
                        <button className="w-full rounded-md text-gray-400 text-lg px-7 py-1.5 border border-gray-400 hover:opacity-70">Delete Profile</button>
                    </div>
                </div>
            </>
        );
    }
}
 
export default MyProfile;