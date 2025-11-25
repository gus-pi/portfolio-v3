import Stairs from './Stairs';

const StairsContainer = () => {
    return (
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
        </div>
    );
};

export default StairsContainer;
