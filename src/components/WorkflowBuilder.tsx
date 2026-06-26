/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Play, Sparkles, AlertCircle, Plus, Mail, Sliders, Cpu, Send, CheckCircle } from 'lucide-react';

interface WorkflowNode {
  id: string;
  title: string;
  type: 'trigger' | 'logic' | 'agent' | 'action';
  status: 'idle' | 'running' | 'success' | 'error';
  icon: any;
  details: string;
}

export default function WorkflowBuilder() {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(-1);

  const [nodes, setNodes] = useState<WorkflowNode[]>([
    { id: '1', title: 'Email Trigger (IMAP)', type: 'trigger', status: 'idle', icon: Mail, details: 'Inbound message received' },
    { id: '2', title: 'Extract Fields', type: 'logic', status: 'idle', icon: Sliders, details: 'Split body, attachment and sender' },
    { id: '3', title: 'AI Agent Validator', type: 'agent', status: 'idle', icon: Cpu, details: 'Gemini-3.5 cognitive triage' },
    { id: '4', title: 'Telegram Alert', type: 'action', status: 'idle', icon: Send, details: 'Dispatch telemetry to team' },
    { id: '5', title: 'Send Email Response', type: 'action', status: 'idle', icon: CheckCircle, details: 'Confirm resolution to user' }
  ]);

  const handleRunSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);

    // Sequence node statuses to simulate an active data flow
    const sequence = [
      { index: 0, status: 'running' as const },
      { index: 0, status: 'success' as const, next: 1, nextStatus: 'running' as const },
      { index: 1, status: 'success' as const, next: 2, nextStatus: 'running' as const },
      { index: 2, status: 'success' as const, next: 3, nextStatus: 'running' as const },
      { index: 3, status: 'success' as const, next: 4, nextStatus: 'running' as const },
      { index: 4, status: 'success' as const }
    ];

    let delay = 0;
    sequence.forEach((step, sIdx) => {
      setTimeout(() => {
        setNodes(prev => {
          const nextNodes = [...prev];
          nextNodes[step.index].status = step.status;
          if ('next' in step && step.next !== undefined && step.nextStatus) {
            nextNodes[step.next].status = step.nextStatus;
            setActiveStep(step.next);
          } else if (step.status === 'success' && step.index === 4) {
            setIsRunning(false);
            setActiveStep(-1);
          }
          return nextNodes;
        });
      }, delay);
      delay += 1000;
    });
  };

  const resetWorkflow = () => {
    setNodes(prev => prev.map(n => ({ ...n, status: 'idle' })));
    setIsRunning(false);
    setActiveStep(-1);
  };

  return (
    <section className="bg-brand-oceanic py-24 border-b border-white/5 relative overflow-hidden" id="workflow">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div className="max-w-2xl text-left space-y-3">
            <span className="text-xs font-mono text-brand-saffron tracking-[0.2em] uppercase">OUR PRODUCT</span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl font-sans">
              Build logic at scale
            </h2>
            <p className="text-gray-400">
              Design, deploy, and manage sophisticated AI workflows through an intuitive visual interface. No complex coding - just pure logic paths.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={resetWorkflow}
              className="px-4 py-2 text-sm font-mono border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              Reset Canvas
            </button>
            <button
              onClick={handleRunSimulation}
              disabled={isRunning}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-forsythia px-5 py-2.5 text-sm font-semibold text-brand-oceanic transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
            >
              <Play className="h-4 w-4 fill-current" />
              {isRunning ? 'Tracing Signals...' : 'Run Simulation'}
            </button>
          </div>
        </div>

        {/* Workflow Sandbox Visual Grid */}
        <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 lg:p-8 backdrop-blur-sm relative" id="workflow-sandbox">
          <div className="absolute top-4 right-4 flex items-center gap-2 text-xs font-mono text-gray-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Interactive Simulator</span>
          </div>

          {/* Workflow Canvas Grid of Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center relative">
            {nodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <div key={node.id} className="relative flex flex-col items-center">
                  {/* The Node Box */}
                  <div
                    className={`w-full rounded-xl border p-5 transition-all duration-300 relative z-10 ${
                      node.status === 'running'
                        ? 'border-brand-forsythia bg-brand-forsythia/10 shadow-[0_0_20px_rgba(255,200,1,0.2)] scale-[1.02]'
                        : node.status === 'success'
                        ? 'border-brand-mint/40 bg-brand-mint/5 shadow-[0_0_20px_rgba(217,232,226,0.1)]'
                        : 'border-white/5 bg-brand-oceanic hover:border-white/10'
                    }`}
                  >
                    {/* Node Type Tag */}
                    <div className="flex justify-between items-center mb-4">
                      <span className={`text-[8px] font-mono uppercase px-1.5 py-0.5 rounded font-bold ${
                        node.type === 'trigger' ? 'bg-indigo-500/10 text-indigo-400' :
                        node.type === 'logic' ? 'bg-amber-500/10 text-amber-400' :
                        node.type === 'agent' ? 'bg-brand-saffron/10 text-brand-saffron' :
                        'bg-brand-mint/10 text-brand-mint'
                      }`}>
                        {node.type}
                      </span>
                      {node.status === 'running' && (
                        <span className="flex h-1.5 w-1.5 rounded-full bg-brand-forsythia animate-ping" />
                      )}
                    </div>

                    {/* Header with Icon */}
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className={`p-2 rounded-lg bg-white/5 ${
                        node.status === 'running' ? 'text-brand-forsythia' : 'text-gray-400'
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-sans text-sm font-bold text-white tracking-tight">{node.title}</h4>
                    </div>

                    {/* Details */}
                    <p className="text-gray-500 text-[11px] leading-snug">{node.details}</p>
                  </div>

                  {/* Connecting Line (Only visible on MD/LG width between nodes) */}
                  {index < nodes.length - 1 && (
                    <div className="hidden md:block absolute top-[50%] left-[100%] w-6 h-0.5 bg-white/5 -translate-y-1/2 z-0">
                      {/* Animating flow signal */}
                      {isRunning && activeStep === index && (
                        <div className="absolute top-1/2 left-0 h-1.5 w-1.5 rounded-full bg-brand-forsythia -translate-y-1/2 animate-[ping_1s_infinite]" />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Execution Status Banner */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-3 text-gray-400">
              <span className="font-bold text-white uppercase">Execution log:</span>
              <span>{isRunning ? `Node ${activeStep + 1} processing payload...` : 'System idle. Waiting for inbound trigger.'}</span>
            </div>
            {isRunning && (
              <div className="flex items-center gap-1.5 text-brand-forsythia">
                <Sparkles className="h-3.5 w-3.5 animate-spin" />
                <span>Simulating pipeline flow</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
