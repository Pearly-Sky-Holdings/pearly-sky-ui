import React, { useEffect, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

interface Connection {
  id: number;
  from: number;
  to: number;
  delay: number;
}

const NetworkOverlay: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);

  useEffect(() => {
    // Create random nodes
    const nodeCount = Math.floor(Math.random() * 3) + 5; // 5-7 nodes
    const newNodes: Node[] = [];
    
    for (let i = 0; i < nodeCount; i++) {
      newNodes.push({
        id: i,
        x: Math.random() * 80 + 10, // 10-90%
        y: Math.random() * 80 + 10, // 10-90%
        size: Math.random() * 0.5 + 0.8, // 0.8-1.3 size multiplier
        delay: Math.random() * 2 // 0-2s delay
      });
    }
    
    setNodes(newNodes);
    
    // Create connections between nodes
    const newConnections: Connection[] = [];
    let connectionId = 0;
    
    // Ensure each node has at least one connection
    for (let i = 0; i < newNodes.length; i++) {
      const nextNode = (i + 1) % newNodes.length;
      newConnections.push({
        id: connectionId++,
        from: i,
        to: nextNode,
        delay: Math.random() * 1.5 // 0-1.5s delay
      });
    }
    
    // Add some random additional connections
    const additionalConnections = Math.floor(Math.random() * 3) + 1; // 1-3 additional connections
    for (let i = 0; i < additionalConnections; i++) {
      const from = Math.floor(Math.random() * newNodes.length);
      let to = Math.floor(Math.random() * newNodes.length);
      
      // Ensure we don't connect a node to itself
      while (to === from) {
        to = Math.floor(Math.random() * newNodes.length);
      }
      
      // Check if this connection already exists
      const exists = newConnections.some(c => 
        (c.from === from && c.to === to) || (c.from === to && c.to === from)
      );
      
      if (!exists) {
        newConnections.push({
          id: connectionId++,
          from,
          to,
          delay: Math.random() * 1.5 // 0-1.5s delay
        });
      }
    }
    
    setConnections(newConnections);
  }, []);

  const calculateAngle = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  };

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  return (
    <div className="network-overlay">
      {connections.map(connection => {
        const fromNode = nodes.find(n => n.id === connection.from);
        const toNode = nodes.find(n => n.id === connection.to);
        
        if (!fromNode || !toNode) return null;
        
        const fromX = fromNode.x;
        const fromY = fromNode.y;
        const toX = toNode.x;
        const toY = toNode.y;
        
        const angle = calculateAngle(fromX, fromY, toX, toY);
        const distance = calculateDistance(fromX, fromY, toX, toY);
        
        return (
          <div 
            key={`connection-${connection.id}`}
            className="connection"
            style={{
              width: `${distance}%`,
              left: `${fromX}%`,
              top: `${fromY}%`,
              transform: `rotate(${angle}deg)`,
              animationDelay: `${connection.delay}s`
            }}
          >
            <div className="connection-animation"></div>
            <div 
              className="moving-particle"
              style={{
                animationDelay: `${connection.delay + 0.5}s`
              }}
            ></div>
          </div>
        );
      })}
      
      {nodes.map(node => (
        <div 
          key={`node-${node.id}`}
          className="node"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: `scale(${node.size})`,
            animationDelay: `${node.delay}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default NetworkOverlay;