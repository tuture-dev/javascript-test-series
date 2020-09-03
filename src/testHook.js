import React from 'react';
import { shallow } from 'enzyme';

function testHook(hook) {
  let output;
  function HookWrapper() {
    output = hook();
    return <></>;
  }
  shallow(<HookWrapper />);
  return output;
}

export default testHook;
